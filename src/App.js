import React, { Fragment ,useState,useEffect} from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Slider from './components/Slider'
import {axios} from './utils/Axios'

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
    {movieDatas&&movieDatas.length ?
    <div className="container">
      <Slider movieDatas={[...movieDatas.slice(0,6)]}/>
       <Main movieDatas={movieDatas}/>
   </div>
   :<h1>loading...</h1>
    }
   </Fragment>
  )
}

export default App