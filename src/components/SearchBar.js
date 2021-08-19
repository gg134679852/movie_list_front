import React,{useState} from 'react'
import './SearchBar.scss'
const SearchBar = ({startSearch,startGenreFliter,genreData})=>{
  const [searchBarData,setSearchBarData] = useState({
    keyWord:''
  })
  const enterSearchValue = (value)=>{
    setSearchBarData({keyWord:value})
  }
  const enterGenreValue = (value)=>{
    startGenreFliter(value)
  }
  const submitSearchValue = (e)=>{
    e.preventDefault()
    startSearch(searchBarData)
  }
  return (
    <div className="search-area">
      <select className="search-area__genreSelect" onChange={e=>enterGenreValue(e.target.value)}>
       <option value="全部">全部</option>
       {genreData.map((e,index)=><option value={e} key={index}>{e}</option>)}
      </select>
      <form onSubmit={(e)=>{submitSearchValue(e)}}>
     <input className="search-area__input" type="text" onChange={e=>enterSearchValue(e.target.value)} />
     <button className="search-area__submitButton" type='submit'><i class="fas fa-search"></i></button>
     </form>
    </div>
  )
}

export default SearchBar