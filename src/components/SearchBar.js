import React, { useState } from 'react'
import { axios } from '../utils/Axios'
import PropTypes from 'prop-types'
import './SearchBar.scss'
const SearchBar = ({ genreData, setSearchData }) => {
  const [searchBarData, setSearchBarData] = useState({
    keyWord: ''
  })
  const enterSearchValue = (value) => {
    setSearchBarData({ keyWord: value })
  }
  const enterGenreValue = (value) => {
    if (value === '全部') {
      setSearchData([])
    }
    axios.get(`movieList/searchMovie?genre=${value}`)
      .then((obj) => {
        setSearchData(obj.data.product)
      })
  }
  const submitSearchValue = (e) => {
    e.preventDefault()
    axios.get(`movieList/searchMovie?keyWord=${searchBarData.keyWord}`)
      .then((obj) => {
        setSearchData(obj.data.product)
      })
  }
  return (
    <div className="search-area">
      <select className="search-area__genreSelect" onChange={e => enterGenreValue(e.target.value)}>
        <option value="全部">全部</option>
        {genreData.map((e, index) => <option value={e} key={index}>{e}</option>)}
      </select>
      <form className="search-area__form-group" onSubmit={(e) => { submitSearchValue(e) }}>
        <input className="search-area__form-group__input" type="text" onChange={e => enterSearchValue(e.target.value)} required />
        <button className="search-area__form-group__submitButton" type='submit'><i className="fas fa-search"></i></button>
      </form>
    </div>
  )
}
SearchBar.propTypes = {
  genreData: PropTypes.array.isRequired,
  setSearchData: PropTypes.func.isRequired
}
export default SearchBar
