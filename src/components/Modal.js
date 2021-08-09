import React,{useRef,Fragment} from 'react'
import{useSpring , animated} from 'react-spring'
import ReactPlayer from 'react-player/youtube'
import './Modal.scss'
 const Modal = ({ showModal, setShowModal,propDatas}) => {
    const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });
    const modalRef = useRef()
    const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return (
    <Fragment>
    {showModal ? 
    <div className="movie-modal" onClick={closeModal} ref={modalRef}>
      <animated.div className="movie-modal__card" style={animation}>
        <h1>{propDatas.name}</h1>
        {propDatas.trailer === 'none' ? <h1>尚無預告片</h1>:<ReactPlayer url={`http://www.youtube.com/embed/${propDatas.trailer}`}
      controls={true}/>}
      </animated.div>
    </div>
    : null}
  </Fragment>  
  )
}

export default Modal