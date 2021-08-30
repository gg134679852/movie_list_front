import React,{useRef,Fragment} from 'react'
import './MovieCard.scss'
import {useHistory} from "react-router-dom"
import MediaQuery  from 'react-responsive'
import {axios} from '../utils/Axios'
import { Toast } from "../utils/sweetalert"
import {useSelector} from "react-redux"
const MovieCard = ({propDatas}) =>{
  const cardRef = useRef()
  const history = useHistory()
  const userData = useSelector((state)=>state.userReducer)
  const pageLink = ()=>{
    history.push({
      pathname: '/detailPage',
      state: {propDatas}
    })
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
    <Fragment>
    <MediaQuery minWidth={375} maxWidth={1224}>
     <button className="movie-card"
     onClick={pageLink} id={propDatas.id} ref={cardRef}
     >
      <img src={propDatas.poster} className="movie-card__img" alt="" />
     </button>
    </MediaQuery>
    <MediaQuery minWidth={1224}>
      <div key={propDatas.id} className="movie-card">
        <img src={propDatas.poster} className="movie-card__img" alt="" />
        <div className="movie-card__info">
          <h1>{propDatas.name}</h1>
          <h3>{propDatas.date}</h3>
          <button className="movie-card__info__detail-button"
          onClick={pageLink} id={propDatas.id} ref={cardRef}><h4>詳細</h4></button>
          {userData.id.length !== 0 ? <button className="movie-card__info__add-button"
          onClick={addFavoriteMoviete} id={propDatas.id} ref={cardRef}><h4>收藏</h4></button>:null}
        </div>   
      </div>
      </MediaQuery>
      </Fragment>
   )
  }
export default MovieCard
