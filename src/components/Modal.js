import React,{useRef,Fragment} from 'react'
import{useSpring , animated} from 'react-spring'
import './Modal.scss'
import YouTube from 'react-youtube';
 const Modal = ({ showModal, setShowModal,propDatas}) => {
   const opts = {
      height: '390',
      width: '640',
    }
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
        {propDatas.trailer === 'none' ? <h1>尚無預告片</h1>:<YouTube videoId={propDatas.trailer} opts={opts}/>}
      </animated.div>
    </div>
    : null}
  </Fragment>  
  )
}

export default Modal