import React, { Fragment } from 'react'
import './App.scss'
import NavBar from './NavBar'
import MovieCard from './MovieCard'

const App =()=>{
  return(
  <Fragment>
   <NavBar/>
   <MovieCard/>
   </Fragment>
  )
}

export default App