import React, { useRef, Fragment } from 'react'
import PropTypes from 'prop-types'
import './Favorite.scss'
import { axios } from '../utils/Axios'
import { Toast } from '../utils/sweetalert'
import { useHistory } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { useSelector } from 'react-redux'
const Favorite = ({ propDatas }) => {
  const cardRef = useRef()
  const history = useHistory()
  const userData = useSelector((state) => state.userReducer)
  const removeFavoriteMoviete = () => {
    const id = cardRef.current.id
    axios
      .delete('/movieList/removeFavoriteMovie', {
        data: {
          subMovieTitle: id,
          userId: userData.id
        },
        headers: { Authorization: `Bearer ${userData.token}` }
      })
      .then((obj) => {
        Toast.fire({
          icon: obj.data.status,
          title: obj.data.message
        })
      })
  }
  const pageLink = () => {
    history.push({
      pathname: '/detailPage',
      state: { propDatas }
    })
  }
  return (
    <Fragment>
      <MediaQuery minWidth={375} maxWidth={1224}>
        <button
          className="movie-card"
          onClick={pageLink}
          id={propDatas.id}
          ref={cardRef}
        >
          <img src={propDatas.poster} className="favorite-movie-card" alt="" />
        </button>
      </MediaQuery>
      <MediaQuery minWidth={1224}>
        <div key={propDatas.id} className="favorite-movie-card">
          <img
            src={propDatas.poster}
            className="favorite-movie-card__img"
            alt=""
          />
          <div className="favorite-movie-card__info">
            <h1>{propDatas.name}</h1>
            <h3>{propDatas.date}</h3>
            <button
              className="favorite-movie-card__info__detail-button"
              id={propDatas.subMovieTitle}
              onClick={pageLink}
              ref={cardRef}
            >
              <h4>詳細</h4>
            </button>
            <button
              className="favorite-movie-card__info__remove-button"
              onClick={removeFavoriteMoviete}
              id={propDatas.subMovieTitle}
              ref={cardRef}
            >
              <h4>移除</h4>
            </button>
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  )
}
Favorite.propTypes = {
  propDatas: PropTypes.array.isRequired
}
export default Favorite
