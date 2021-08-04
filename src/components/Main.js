import React,{useState,useEffect} from 'react'
import MovieCard from './MovieCard'
import './Main.scss'
const Main = props => {
  const[propDatas,setPropDatas] = useState([])
  const getPropDatas = ()=>{
    setPropDatas(props)
  }
  useEffect(()=>{
    getPropDatas()
  })
  return (
    <section className="movie-card-area">
  <div className="container">
    <div className="movie-card-wrapper">
       <MovieCard propDatas ={propDatas} />
    </div>
  </div>
</section>
  )
}

export default Main
