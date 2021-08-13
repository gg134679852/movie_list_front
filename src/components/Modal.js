import React,{useState,useEffect,useRef,Fragment} from 'react'
import{useSpring , animated} from 'react-spring'
import ReactPlayer from 'react-player/youtube'
import './Modal.scss'
 const Modal = ({ showModal, setShowModal,propDatas}) => {
   const[textEnd,setTextEnd] = useState('')
    const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })
    const modalRef = useRef()
    const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  }
  useEffect(()=>{
  if(propDatas){
  const copyData = {...propDatas}
  setTextEnd(copyData.description.indexOf('。')+1)
  }
  },[propDatas])
  return (
    <Fragment>
    {showModal ? 
    <div className="movie-modal" onClick={closeModal} ref={modalRef}>
      <animated.div className="movie-modal__card" style={animation}>
        <div className="movie-modal__card__head">
            <img className="movie-modal__card__head__backdrop" src={propDatas.backdrop} alt="" />
            <img src={propDatas.poster} alt="" className="movie-modal__card__head__poster" />
            <div className="movie-modal__card__head__info">
             <h1 className="movie-modal__card__head__info__title">{propDatas.name}</h1>
              <h4 className="movie-modal__card__head__info__subTitle">{propDatas.subMovieTitle}</h4>
        <h3 className="movie-modal__card__head__info__movieType">{propDatas.genres}</h3>
        <h3 className="movie-modal__card__head__info__releaseDate">上映日期:{propDatas.date}</h3>
        <h3 className="movie-modal__card__head__info__director">導演:{propDatas.director}</h3>
        <h3 className="movie-modal__card__head__info__stars">
           演員:{propDatas.stars}
         </h3>
         </div>
         <div className="movie-modal__card__head__info__description">
          <p>{propDatas.description.slice(0,textEnd)}</p>
         </div>
        </div>
        {propDatas.trailer === 'none' ? <h1>尚無預告片</h1>:<ReactPlayer url={`http://www.youtube.com/embed/${propDatas.trailer}`}
      controls={true}/>}
      </animated.div>
    </div>
    : null}
  </Fragment>  
  )
}

export default Modal