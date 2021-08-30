import React,{useState,Fragment} from 'react'
import MovieCard from './MovieCard'
import Slider from './Slider'
import SearchBar from './SearchBar'
import {keyWordSearch,genreFliter} from '../utils/startSearch'
import './Main.scss'
const Main = ({movieDatas,genreData}) => {
  const [searchData, setSearchData] = useState('')
  const copyData = [...movieDatas]
  const startSearch = async (value)=>{
   const data = await keyWordSearch(value,copyData)
   setSearchData(data)
  }
  const startGenreFliter = async (value)=>{
   const data = await genreFliter(value,copyData)
   setSearchData(data)
  }
  return (
    <Fragment>
      <Slider movieDatas={[...movieDatas.slice(0,6)]} />
      <SearchBar startSearch={startSearch} genreData={genreData} startGenreFliter={startGenreFliter} />
    <section className="movie-card-area">
        <div className="movie-card-wrapper">
      { 
        searchData ? 
        searchData.map(data=>
       <MovieCard propDatas={data} key={data.id}/>
      )
      :movieDatas.map(data=>
       <MovieCard propDatas={data} key={data.id}/>
      )}
      </div>
 </section>
<footer>
  <h2>© 2021 Movie-List All Rights Reserved.</h2>
</footer>
</Fragment>
  )
}

export default Main
