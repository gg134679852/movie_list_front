import React,{Fragment} from 'react'
import './NavBar.scss'
import {useHistory} from "react-router-dom"
import { removeUserInfo } from "../state/actions/index"
import { Toast } from "../utils/sweetalert"
import { useDispatch} from "react-redux"
import {useSelector} from "react-redux"
const NavBar =()=>{
  const userData = useSelector((state)=>state.userReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  const pageLink = (link)=>{
    history.push(link)
  }
  const logout = ()=>{
    dispatch(removeUserInfo())
    Toast.fire({
      icon: 'success',
      title: "成功登出"
    })
  }
  return (
    <Fragment>
    <header className="header">
  <div className="web-title">
   <button onClick={()=>pageLink('/')}><img className="web-title__img" src="https://www.iamherelearning.com/wp-content/uploads/2020/02/Movie-Icon-1-460x406.png" alt="" /></button>
    <button onClick={()=>pageLink('/')}><h1>MOVIE-LIST</h1></button>
  </div>
  <div className="header-buttons">
  {userData.id.length !== 0 ? 
    (
      <div className="header-buttons__user-buttons">
        <button className="header-buttons__user-buttons__userPage" onClick={()=>pageLink('/userPage')}>
       使用者頁面
     </button>
      <button className="header-buttons__user-buttons__logout" onClick={logout}>
       登出
     </button>
      </div>
    )
  :
    <button className="header-buttons__login" onClick={()=>pageLink('/login')}>
       登陸
     </button>}
    </div>
 </header>
 </Fragment>
  )
}

export default NavBar



