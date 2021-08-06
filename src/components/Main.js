import React,{useState,Fragment} from 'react'
import MovieCard from './MovieCard'
import Modal from './Modal'
import './Main.scss'
const Main = ({movieDatas}) => {
  const [showModal, setShowModal] = useState(false)
  const [modalDataId, setModalDataId] = useState('')

  const openModal = (id) => {
    setModalDataId(prev => prev = Number(id)-1)
    setShowModal(prev => !prev)
  }

  return (
    <Fragment>
    <section className="movie-card-area">
  <div className="container">
    {movieDatas&&movieDatas.length ? 
    <div className="movie-card-wrapper">
      {movieDatas.map(data=>
       <MovieCard propDatas={data} openModal={openModal} key={data.id}/>
      )}
    </div>:<h1>loading...</h1>}
  </div>
</section>
<Modal showModal={showModal} setShowModal={setShowModal} propDatas={movieDatas[modalDataId]}/>
</Fragment>
  )
}

export default Main
