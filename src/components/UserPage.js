import React from "react"
import './UserPage.scss'
const UserPage =({userData})=>{
  return (
    <div className="userPage__container">
     <div className="userPage__user-area">
       <i className="fas fa-user-circle"> </i>
       <div className="userPage__user-area__info">
       <h1>{userData.name}</h1>
       <h4>{userData.email}</h4>
       </div>
     </div>
    </div>
  )
}

export default UserPage
