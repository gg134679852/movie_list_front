import React,{useState,useEffect,Fragment} from "react"
import Modal from './Modal'
import Favorite from "./Favorite"
import {axios} from '../utils/Axios'
import './UserPage.scss'
const UserPage =({userData})=>{
  const [favoriteMovie,setFavoriteMovie] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState('')
  const openModal = (id) => {
    const favoriteMovieModalData = [...favoriteMovie.data].filter((e)=>e.subMovieTitle === id)
    setModalData(favoriteMovieModalData)
    setShowModal(prev => !prev)
  }
  useEffect(()=>{
   axios.get('/movieList/favoriteMovies',{
     params:{
     userId:userData.id}
    })
   .then((obj)=>{
    setFavoriteMovie(obj.data)
   })
  },[userData])
  return (
    <Fragment>
    <div className="userPage__container">
     <div className="userPage__user-area">
       <i className="fas fa-user-circle"> </i>
       <div className="userPage__user-area__info">
       <h1>{userData.name}</h1>
       <h1>{userData.email}</h1>
       </div>
     </div>
      <h1 className="userPage__favorite-movies-area__title">收藏電影列表</h1>
     <div className="userPage__favorite-movies-area">
         {favoriteMovie.data&&favoriteMovie.data.length ? 
         favoriteMovie.data.map((data)=><Favorite propDatas={data} openModal={openModal} key={data.id} />):null}
       </div>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal} propDatas={modalData[0]}/>
    </Fragment>
  )
}

export default UserPage
