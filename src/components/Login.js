import React,{useState} from "react"
import {useHistory} from "react-router-dom"
import {axios} from '../utils/Axios' 
import './Login.scss'
const Login = ()=>{
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
      console.log(obj)
    })
  }
  const pageLink = (link)=>{
    history.push(link)
  }
  return (
    <div className="login__container">
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
  )
}


export default Login