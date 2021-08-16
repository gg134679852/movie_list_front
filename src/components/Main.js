import React,{useState,Fragment} from 'react'
import MovieCard from './MovieCard'
import Modal from './Modal'
import Slider from './Slider'
import SearchBar from './SearchBar'
import './Main.scss'
const Main = ({movieDatas}) => {
  const [showModal, setShowModal] = useState(false)
  const [modalDataId, setModalDataId] = useState('')
  const [searchData, setSearchData] = useState('')
  const openModal = (id) => {
    setModalDataId(prev => prev = Number(id)-1)
    setShowModal(prev => !prev)
  }
  const startSearch = (value)=>{
    const data= [...movieDatas]
    const wordFliter = /\w+/g
    if(wordFliter.test(value)){
      setSearchData(data.filter(e=>e.subMovieTitle.toLowerCase().match(value.toLowerCase())))
    }else{
      setSearchData(data.filter(e=>e.name.indexOf(value,0) !== -1))
    }
  }
  return (
    <Fragment>
      <Slider movieDatas={[...movieDatas.slice(0,6)]} openModal={openModal}/>
      <SearchBar startSearch={startSearch} />
    <section className="movie-card-area">
    <div className="movie-card-wrapper">
      { 
        searchData ? 
        searchData.map(data=>
       <MovieCard propDatas={data} openModal={openModal} key={data.id}/>
      )
      :movieDatas.map(data=>
       <MovieCard propDatas={data} openModal={openModal} key={data.id}/>
      )}
   </div>
 </section>
<Modal showModal={showModal} setShowModal={setShowModal} propDatas={movieDatas[modalDataId]}/>
</Fragment>
  )
}

export default Main
