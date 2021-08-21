import React from "react"
import './Login.scss'
const Login = ()=>{
  return (
    <div className="login__container">
      <div className="login__left">
      </div>
      <div className="login__right">
        <h1>登陸</h1>
        <form className="login__right__inputs">
        <input type="text" />
        <input type="text" />
        <button type="submit">submit</button>
        </form>
        <h5>還不是會員? 註冊</h5>
      </div>
    </div>
  )
}


export default Login
