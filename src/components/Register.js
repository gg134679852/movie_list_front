import React, { useState } from 'react'
import './Register.scss'
import { axios } from '../utils/Axios'
import { useHistory } from 'react-router-dom'
import { Toast } from '../utils/sweetalert'
const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const history = useHistory()
  const handle = (e) => {
    const newData = { ...registerData }
    newData[e.target.id] = e.target.value
    setRegisterData(newData)
  }
  const formSubmit = (e) => {
    e.preventDefault()
    axios.post('/movieList/signup', {
      data: {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        confirmPassword: registerData.confirmPassword
      }
    })
      .then((obj) => {
        if (obj.data.status === 'success') {
          Toast.fire({
            icon: 'success',
            title: obj.data.message
          })
          history.push('/login')
        } else {
          Toast.fire({
            icon: 'error',
            title: obj.data.message
          })
        }
      })
  }
  return (
    <div className="register__container">
      <div className="register__left">
      </div>
      <div className="register__right">
        <h1>註冊會員</h1>
        <form className="register__right__form-group" onSubmit={(e) => formSubmit(e)}>
          <div className="register__right__form-group__input">
            <label htmlFor="name">會員名稱</label>
            <input type="text" id="name" name="name" value={registerData.name} onChange={(e) => handle(e)} required></input>
          </div>
          <div className="register__right__form-group__input">
            <label htmlFor="email">電子郵件</label>
            <input type="email" id="email" name="email" value={registerData.email} onChange={(e) => handle(e)} required></input>
          </div>
          <div className="register__right__form-group__input">
            <label htmlFor="password">會員密碼</label>
            <input type="password" id="password" name="password" value={registerData.password} onChange={(e) => handle(e)} required></input>
          </div>
          <div className="register__right__form-group__input">
            <label htmlFor="confirmPassword">確認密碼</label>
            <input type="password" id="confirmPassword" name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={(e) => handle(e)}
              required
            ></input>
          </div>
          <button type="submit">送出</button>
        </form>
      </div>
    </div>
  )
}

export default Register
