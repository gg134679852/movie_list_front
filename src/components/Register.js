import React from 'react'
import './Register.scss'
const Register = () => {
  return (
    <div className="register__container">
      <div className="register__left">
      </div>
      <div className="register__right">
        <h1>註冊會員</h1>    
        <form className="register__right__form-group">
          <div className="register__right__form-group__input">
            <label htmlFor="name">會員名稱</label>
        <input type="text" id="name" name="name"></input>
          </div>
      <div className="register__right__form-group__input">
        <label htmlFor="email">電子郵件</label>
        <input type="email" id="email" name="email"></input>
      </div>
      <div className="register__right__form-group__input">
        <label htmlFor="password">會員密碼</label>
        <input type="password" id="password" name="password"></input>
      </div>
      <div className="register__right__form-group__input">
        <label htmlFor="confirmPassword">確認密碼</label>
        <input type="password" id="confirmPassword" name="confirmPassword" 
        ></input>
      </div>
      <button type="submit">送出</button>
      </form>
      </div>
    </div>
  )
}

export default Register
