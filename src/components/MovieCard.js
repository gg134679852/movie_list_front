import React,{useRef} from 'react'
import './MovieCard.scss'
const MovieCard = ({propDatas,openModal}) =>{
  const cardRef = useRef()
  const modalSwitch = ()=>{
   const id = cardRef.current.id
    openModal(id)
  }
  return (
      <div key={propDatas.id} className="movie-card">
        <img src={propDatas.poster} className="movie-card__img" alt="" />
        <div className="movie-card__info">
          <h1>{propDatas.name}</h1>
          <h3>{propDatas.date}</h3>
          <button className="movie-card__info__detail-button"
          onClick={modalSwitch} id={propDatas.id} ref={cardRef}><h4>詳細</h4></button>
          <button className="movie-card__info__ticket-button"
          onClick={modalSwitch} id={propDatas.id} ref={cardRef}><h4>收藏</h4></button>
        </div>   
      </div>)
  }
export default MovieCard
