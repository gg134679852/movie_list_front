import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import Slider from './Slider'
import SearchBar from './SearchBar'
import './Main.scss'
const Main = ({ movieDatas, genreData, setPage, page }) => {
  const [searchData, setSearchData] = useState('')
  return (
    <Fragment>
      <Slider movieDatas={[...movieDatas.slice(0, 6)]} />
      <SearchBar genreData={genreData}
         setSearchData={setSearchData} />
      <section className="movie-card-area">
        <div className="movie-card-wrapper">
          {
            searchData && searchData.length
              ? searchData.map(data =>
                <MovieCard propDatas={data} key={data.id} />
              )
              : movieDatas.map(data =>
                <MovieCard propDatas={data} key={data.id} setPage={setPage} page={page} />
              )}
        </div>
      </section>
    </Fragment>
  )
}
Main.propTypes = {
  movieDatas: PropTypes.array.isRequired,
  genreData: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired
}
export default Main
