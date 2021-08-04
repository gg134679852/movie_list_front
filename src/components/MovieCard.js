import React from 'react'
import './MovieCard.scss'
const MovieCard = data =>{
  console.log(data.propDatas.movieDatas)
  if(data.propDatas.movieDatas){
  return ( data.propDatas.movieDatas.map(data =>(
      <div key={data.id} className="movie-card">
        <img src={`data:image/jpeg;base64,${data.poster}`} className="movie-card__img" alt="" />
        <div className="movie-card__info">
          <h1>{data.name}</h1>
          <p>sadfasdf</p>
          <a href="asdasd">read more</a>
        </div>
      </div>)
    ))
  }else{
   return(<h1>Loading...</h1>)
  }
  
}
export default MovieCard
