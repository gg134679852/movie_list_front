import React from 'react'
import './SearchBar.scss'
const SearchBar = ({startSearch})=>{
  return (
    <div className="search-input">
     <input type="text" onChange={e=>startSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar