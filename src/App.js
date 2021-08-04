import React, { Fragment ,useState,useEffect} from 'react'
import './App.scss'
import NavBar from './NavBar'
import Main from './Main'
import {axios} from './controllers/movieController'

const App =()=>{
  const [movieDatas,setMovieDatas]=useState([])
  const getMovieList = async ()=>{
   const response = await axios.get('movieList')

   if(response && response.data.product) return setMovieDatas(response.data.product)
  }
  useEffect(()=>{
     getMovieList()
  }
  ,[])
  return(
  <Fragment>
   <NavBar/>
   <Main movieDatas={movieDatas}/>
   </Fragment>
  )
}

export default App