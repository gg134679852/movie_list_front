import React,{Fragment} from 'react'
import './NavBar.scss'
import {Link} from "react-router-dom"
const NavBar =()=>{
  return (
    <Fragment>
    <header className="header">
  <div className="web-title">
    <img className="web-title__img" src="https://www.iamherelearning.com/wp-content/uploads/2020/02/Movie-Icon-1-460x406.png" alt="" />
    <h1>MOVIE-LIST</h1>
  </div>
  {/* <div className="user-page-link">
    <a href="#"><i className="fas fa-user-circle"> </i>
    </a>
  </div> */}
     
<Link to='/login'>
  <button className="header__login-button"></button>
</Link>
 </header>
 </Fragment>
  )
}

export default NavBar



