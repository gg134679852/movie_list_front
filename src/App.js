import React, { Fragment ,useState,useEffect} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.scss'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Login from './components/Login'
import Register from './components/Register'
import UserPage from './components/UserPage'
import DetailPage from './components/DetailPage'
import {useSelector} from "react-redux"
import {axios} from './utils/Axios'

const App =()=>{
   const userData = useSelector((state)=>state.userReducer)
  const [movieDatas,setMovieDatas]=useState({datas:[],genres:[]})
  const [page,setPage] = useState(1)

  const getMovieList = async ()=>{
  const response = await  axios.get(`movieList?page=${page}`)
  const genreData = []
  response.data.genres.forEach(e => {
    genreData.push(e.name) 
  })
   return setMovieDatas(prev =>{
      if (prev.datas.length > 0){
      return  {datas:prev.datas.concat(response.data.product),genres:genreData}
   }else{
      return  {datas:response.data.product,genres:genreData}
      }
   })
  }
  useEffect(()=>{
     getMovieList()
  }
  ,[page])
  return(
   <Fragment>
   <NavBar/>
   <Switch>
   <Route path='/' exact >
    {movieDatas.datas&&movieDatas.datas.length ?
    <div className="container">
       <Main movieDatas={movieDatas.datas}genreData = {movieDatas.genres}  setPage={setPage} page={page} getMovieList={getMovieList}/>
   </div>
   : <div className="loading">
     <div className="loading__gif"></div>
      <h1 className="loading__title">網頁載入中...</h1>
      </div>
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
  <Route path='/detailPage'>
     <DetailPage />
  </Route>
 </Switch>
 <footer>
  <h2>© 2021 Movie-List All Rights Reserved.</h2>
</footer>
</Fragment>
  )
}

export default App