import React, { useState, useEffect, Fragment } from 'react'
import Favorite from './Favorite'
import { axios } from '../utils/Axios'
import PropTypes from 'prop-types'
import './UserPage.scss'
const UserPage = ({ userData }) => {
  const [favoriteMovie, setFavoriteMovie] = useState('')
  useEffect(() => {
    axios.get('/movieList/favoriteMovies', {
      params: { userId: userData.id },
      headers: { Authorization: `Bearer ${userData.token}` }
    })
      .then((obj) => {
        setFavoriteMovie(obj.data)
      })
  }, [userData, favoriteMovie])

  const favoriteMovieFiler = (id) => {
    setFavoriteMovie(e => e.data.filter(data => data.subMovieTitle !== id))
  }

  return (
    <Fragment>
      <div className="userPage__container">
        <div className="userPage__user-area">
          <i className="fas fa-user-circle"> </i>
          <div className="userPage__user-area__info">
            <h1>{userData.name}</h1>
            <h1>{userData.email}</h1>
          </div>
        </div>
        <h1 className="userPage__favorite-movies-area__title">收藏電影列表</h1>
        <div className="userPage__favorite-movies-area">
          {favoriteMovie.data && favoriteMovie.data.length
            ? favoriteMovie.data.map((data) => <Favorite propDatas={data} key={data.id} favoriteMovieFiler={favoriteMovieFiler} />)
            : null}
        </div>
      </div>
    </Fragment>
  )
}
UserPage.propTypes = {
  userData: PropTypes.object.isRequired
}
export default UserPage
