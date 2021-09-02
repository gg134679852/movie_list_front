import React,{useState} from "react"
import {useHistory} from "react-router-dom"
import {axios} from '../utils/Axios' 
import { Toast } from "../utils/sweetalert"
import { addUserInfo } from "../state/actions/index"
import { useDispatch} from "react-redux"
import './Login.scss'
const Login = ()=>{
  const dispatch = useDispatch()
  const [loginData,SetLoginData] = useState({
    email:'',
    password:'',
  })
  const history = useHistory()
  const handle = (e)=>{
    const newData = {...loginData}
    newData[e.target.id] = e.target.value
   SetLoginData(newData)
  }
  const formSubmit = (e)=>{
    e.preventDefault()
    axios.post('/movieList/signin',{
     data:{
      email:loginData.email,
      password:loginData.password,
     }
    })
    .then((obj)=>{
      if(obj.data.status === 'success'){
        const userData = 
            {id:obj.data.user.id,
            name:obj.data.user.name,
            email:obj.data.user.email,
            token:obj.data.token,}
        dispatch(addUserInfo(userData))
        Toast.fire({
          icon: 'success',
          title: obj.data.message
        })
        history.push('/')
      }else{
        Toast.fire({
          icon: 'error',
          title: obj.data.message
        })
      }
    })
  }
  const pageLink = (link)=>{
    history.push(link)
  }
  return (
    <div className="login__container">
      <div className="login__wrapper">
          <div className="login__left">
      </div>
      <div className="login__right">
        <h1>登陸</h1>
        <form className="login__right__form-group" onSubmit={(e)=>formSubmit(e)}>
        <div className="login__right__form-group__input">
            <label htmlFor="email">電子郵件</label>
        <input type="email" id="email" name="email" value={loginData.email} onChange={(e)=>handle(e)} required></input>
          </div>
        <div className="login__right__form-group__input">
            <label htmlFor="password">會員密碼</label>
        <input type="password" id="password" name="password" value={loginData.password} onChange={(e)=>handle(e)} required></input>
          </div>
        <button type="submit">送出</button>
        </form>
        <h5>還不是會員? <button className="" onClick={()=>pageLink('/register')}>註冊</button></h5>
      </div>
      </div>
    </div>
  )
}


export default Login
