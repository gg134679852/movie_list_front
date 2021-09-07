import React,{useState,Fragment} from 'react'
import MovieCard from './MovieCard'
import Slider from './Slider'
import SearchBar from './SearchBar'
import './Main.scss'
const Main = ({movieDatas,genreData,setPage,page,getMovieList}) => {
  const [searchData, setSearchData] = useState('')
  return (
    <Fragment>
      <Slider movieDatas={[...movieDatas.slice(0,6)]} />
      <SearchBar  genreData={genreData} 
      getMovieList={getMovieList} setSearchData={setSearchData} />
    <section className="movie-card-area">
        <div className="movie-card-wrapper">
      { 
        searchData&&searchData.length ? 
        searchData.map(data=>
       <MovieCard propDatas={data} key={data.id}/>
      )
      :movieDatas.map(data=>
       <MovieCard propDatas={data} key={data.id} setPage={setPage} page={page}/>
      )}
      </div>
 </section>
</Fragment>
  )
}

export default Main
