import React,{useRef} from 'react'
import './Favorite.scss'
import axios from 'axios'
import { Toast } from "../utils/sweetalert"
import {useSelector} from "react-redux"
const Favorite = ({propDatas,openModal}) =>{
  const cardRef = useRef()
  const userData = useSelector((state)=>state.userReducer)
  const modalSwitch = ()=>{
    const id = cardRef.current.id
    openModal(id)
  }
  const removeFavoriteMoviete = ()=>{
    const id = cardRef.current.id
    axios.delete('http://localhost:8000/api/movieList/removeFavoriteMovie',{
     data:{
      subMovieTitle:id,
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
      <div key={propDatas.id} className="favorite-movie-card">
        <img src={propDatas.poster} className="favorite-movie-card__img" alt="" />
        <div className="favorite-movie-card__info">
          <h1>{propDatas.name}</h1>
          <h3>{propDatas.date}</h3>
          <button className="favorite-movie-card__info__detail-button"
          onClick={(e)=>modalSwitch(e)} id={propDatas.subMovieTitle} ref={cardRef}><h4>詳細</h4></button>
         <button className="favorite-movie-card__info__remove-button"
          onClick={removeFavoriteMoviete} id={propDatas.subMovieTitle} ref={cardRef}><h4>移除</h4></button>
        </div>   
      </div>)
  }
export default Favorite
