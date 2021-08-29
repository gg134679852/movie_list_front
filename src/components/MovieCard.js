import React,{useRef} from 'react'
import './MovieCard.scss'
import {axios} from '../utils/Axios'
import { Toast } from "../utils/sweetalert"
import {useSelector} from "react-redux"
const MovieCard = ({propDatas,openModal}) =>{
  const cardRef = useRef()
  const userData = useSelector((state)=>state.userReducer)
  const modalSwitch = ()=>{
    const id = cardRef.current.id
    openModal(id)
  }
  const addFavoriteMoviete = ()=>{
    const id = cardRef.current.id
    axios.post('/movieList/addFavoriteMovie',{
     data:{
      movieId:id,
      userId:userData.id,
     }
    })
    .then((obj)=>{
      Toast.fire({
          icon: obj.data.status,
          title: obj.data.message
        })
    })
  }
  return (
      <div key={propDatas.id} className="movie-card">
        <img src={propDatas.poster} className="movie-card__img" alt="" />
        <div className="movie-card__info">
          <h1>{propDatas.name}</h1>
          <h3>{propDatas.date}</h3>
          <button className="movie-card__info__detail-button"
          onClick={modalSwitch} id={propDatas.id} ref={cardRef}><h4>詳細</h4></button>
          {userData.id.length !== 0 ? <button className="movie-card__info__add-button"
          onClick={addFavoriteMoviete} id={propDatas.id} ref={cardRef}><h4>收藏</h4></button>:null}
        </div>   
      </div>)
  }
export default MovieCard
