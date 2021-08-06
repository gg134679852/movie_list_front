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
        <img src={`data:image/jpeg;base64,${propDatas.poster}`} className="movie-card__img" alt="" />
        <div className="movie-card__info">
          <h1>{propDatas.name}</h1>
          <p>sadfasdf</p>
          <button onClick={modalSwitch} id={propDatas.id} ref={cardRef}>button</button>
        </div>
      </div>)
  }
export default MovieCard
