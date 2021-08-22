import React from "react"
import {useHistory} from "react-router-dom"
import './Login.scss'
const Login = ()=>{
  const history = useHistory()
  const pageLink = (link)=>{
    history.push(link)
  }
  return (
    <div className="login__container">
      <div className="login__left">
      </div>
      <div className="login__right">
        <h1>登陸</h1>
        <form className="login__right__inputs">
        <input type="text" />
        <input type="text" />
        <button type="submit">送出</button>
        </form>
        <h5>還不是會員? <button onClick={()=>pageLink('/register')}>註冊</button></h5>
      </div>
    </div>
  )
}


export default Login
