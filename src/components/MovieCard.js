import React, { useRef, useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import './MovieCard.scss'
import { useHistory } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { axios } from '../utils/Axios'
import { Toast } from '../utils/sweetalert'
import { useSelector } from 'react-redux'
const MovieCard = ({ propDatas, setPage, page }) => {
  const cardRef = useRef()
  const history = useHistory()
  const userData = useSelector((state) => state.userReducer)
  const nextPage = useCallback(node => {
    if (cardRef.current) cardRef.current.disconnect()
    cardRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) cardRef.current.observe(node)
  }, [])
  const pageLink = () => {
    history.push({
      pathname: '/detailPage',
      state: { propDatas }
    })
  }
  const addFavoriteMoviete = (e) => {
    const id = e.target.id
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    axios.post('/movieList/addFavoriteMovie', {
      data: {
        movieId: id,
        userId: userData.id
      }
    })
      .then((obj) => {
        Toast.fire({
          icon: obj.data.status,
          title: obj.data.message
        })
      })
  }
  return (
    <Fragment>
      <MediaQuery minWidth={375} maxWidth={1224}>
        {
          propDatas.id === page * 12
            ? <button className="movie-card"
              onClick={pageLink} id={propDatas.id} ref={nextPage}
            >
              <img src={propDatas.poster} className="movie-card__img" alt="" />
            </button>
            : <button className="movie-card"
              onClick={pageLink} id={propDatas.id}
            >
              <img src={propDatas.poster} className="movie-card__img" alt="" />
            </button>
        }
      </MediaQuery>
      <MediaQuery minWidth={1224}>
        {propDatas.id === page * 12
          ? <div key={propDatas.id} className="movie-card" ref={nextPage}>
            <img src={propDatas.poster} className="movie-card__img" alt="" />
            <div className="movie-card__info">
              <h1>{propDatas.name}</h1>
              <h3>{propDatas.date}</h3>
              <button className="movie-card__info__detail-button"
                onClick={pageLink} id={propDatas.id}><h4>詳細</h4></button>
              {userData.id.length !== 0
                ? <button className="movie-card__info__add-button"
                  id={propDatas.id} onClick={(e) => addFavoriteMoviete(e)} ><h4 id={propDatas.id}>收藏</h4></button>
                : null}
            </div>
          </div>
          : <div key={propDatas.id} className="movie-card">
            <img src={propDatas.poster} className="movie-card__img" alt="" />
            <div className="movie-card__info">
              <h1>{propDatas.name}</h1>
              <h3>{propDatas.date}</h3>
              <button className="movie-card__info__detail-button"
                onClick={pageLink} id={propDatas.id}><h4>詳細</h4></button>
              {userData.id.length !== 0
                ? <button className="movie-card__info__add-button"
                  onClick={(e) => { addFavoriteMoviete(e) }} id={propDatas.id}><h4 id={propDatas.id}>收藏</h4></button>
                : null}
            </div>
          </div>}
      </MediaQuery>
    </Fragment>
  )
}

MovieCard.propTypes = {
  propDatas: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.func.isRequired
}
export default MovieCard
