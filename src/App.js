import React, { Fragment ,useState,useEffect} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import UserPage from './components/UserPage'
import {useSelector} from "react-redux"
import {axios} from './utils/Axios'

const App =()=>{
   const userData = useSelector((state)=>state.userReducer)
  const [movieDatas,setMovieDatas]=useState({datas:[],genres:[]})
  const getMovieList = async ()=>{
  const response = await axios.get('movieList')
  let filterData = []
  const genreData = []
   if(response && response.data.product)
   response.data.product.forEach(e=> {
      if(e.genres.indexOf("、",0) !== -1)
      {
        filterData = [...filterData,...e.genres.split('、')]
      }else{
         filterData = [...filterData,e.genres]
      }
   })
   filterData.forEach(e=>{
      if (!genreData.includes(e)){
         genreData.push(e)
      }
   })
   return setMovieDatas({datas:response.data.product,genres:genreData})
  }
  useEffect(()=>{
     getMovieList()
  }
  ,[])
  return(
   <Fragment>
   <NavBar/>
   <Switch>
   <Route path='/' exact >
    {movieDatas.datas&&movieDatas.datas.length ?
    <div className="container">
       <Main movieDatas={movieDatas.datas}genreData = {movieDatas.genres}/>
   </div>
   :<h1>loading...</h1>
    }
   </Route>
  <Route path='/login'>
     <Login />
  </Route>
  <Route path='/register'>
     <Register />
  </Route>
  <Route path='/userPage'>
     {
        userData.id.length !== 0 ? <UserPage userData ={userData} />:<Redirect to='/' />
     }
  </Route>
 </Switch>
</Fragment>
  )
}

export default App