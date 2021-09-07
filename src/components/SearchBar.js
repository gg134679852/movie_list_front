import React,{useState} from 'react'
import axios from 'axios'
import './SearchBar.scss'
const SearchBar = ({startSearch,startGenreFliter,genreData,getMovieList,setSearchData})=>{
  const [searchBarData,setSearchBarData] = useState({
    keyWord:''
  })
  const enterSearchValue = (value)=>{
    setSearchBarData({keyWord:value})
  }
  const enterGenreValue = (value)=>{
    if(value === "全部"){
      setSearchData([])
    }
   axios.get(`http://localhost:8000/api/movieList/searchMovie?genre=${value}`)
    .then((obj)=>{
      setSearchData(obj.data.product)
    })
  }
  const submitSearchValue = (e)=>{
    e.preventDefault()
    axios.get(`http://localhost:8000/api/movieList/searchMovie?keyWord=${searchBarData.keyWord}`)
    .then((obj)=>{
      setSearchData(obj.data.product)
    })
  }
  return (
    <div className="search-area">
      <select className="search-area__genreSelect" onChange={e=>enterGenreValue(e.target.value)}>
       <option value="全部">全部</option>
       {genreData.map((e,index)=><option value={e} key={index}>{e}</option>)}
      </select>
      <form onSubmit={(e)=>{submitSearchValue(e)}}>
     <input className="search-area__input" type="text" onChange={e=>enterSearchValue(e.target.value)} />
     <button className="search-area__submitButton" type='submit'><i className="fas fa-search"></i></button>
     </form>
    </div>
  )
}

export default SearchBar