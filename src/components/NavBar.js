import React,{useState,Fragment} from 'react'
import './NavBar.scss'
import {useHistory} from "react-router-dom"
import { removeUserInfo } from "../state/actions/index"
import { Toast } from "../utils/sweetalert"
import { useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import MediaQuery  from 'react-responsive'
const NavBar =()=>{
  const userData = useSelector((state)=>state.userReducer)
  const [isOpen,setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const pageLink = (link)=>{
    history.push(link)
    setIsOpen(e=> e ? e=false:e)
  }
  const logout = ()=>{
    dispatch(removeUserInfo())
    Toast.fire({
      icon: 'success',
      title: "成功登出"
    })
    setIsOpen(e=>!e)
  }
  const openMenu = ()=>{
    setIsOpen(e=>!e)
  }
  return (
    <Fragment>
    <header className="header">
  <div className="web-title">
   <button onClick={()=>pageLink('/')}><img className="web-title__img" src="https://www.iamherelearning.com/wp-content/uploads/2020/02/Movie-Icon-1-460x406.png" alt="" /></button>
    <button onClick={()=>pageLink('/')}><h1>MOVIE-LIST</h1></button>
  </div>
  <div className="header-buttons">
    <MediaQuery minWidth={375} maxWidth={1224}>
      <div className={isOpen ? "header-buttons__menu-btn open":"header-buttons__menu-btn"} onClick={openMenu}>
       <div className="header-buttons__menu-btn__burger">
        </div>
      </div>
        <ul className={isOpen ? "header-buttons__menu open":"header-buttons__menu"}>
    {userData.id.length !== 0 ? 
    (
      <Fragment>
      <li>
        <button className="header-buttons__menu-btn__userPage" onClick={()=>pageLink('/userPage')}>
       使用者頁面
     </button>
     </li>
     <li>
      <button className="header-buttons__menu-btn__logout" onClick={logout}>
       登出
     </button>
     </li>
     </Fragment>
    )
  :
   <li><button className="header-buttons__menu-btn__login" onClick={()=>pageLink('/login')}>
       登陸
     </button></li>}
        </ul>
      </MediaQuery>
      <MediaQuery minWidth={1224}>
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
      </MediaQuery>
    </div>
 </header>
 </Fragment>
  )
}

export default NavBar



