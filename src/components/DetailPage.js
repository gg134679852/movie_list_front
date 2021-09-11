import React, { useState, useRef } from 'react'
import MediaQuery from 'react-responsive'
import { useLocation } from 'react-router-dom'
import { axios } from '../utils/Axios'
import { Toast } from '../utils/sweetalert'
import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import './DetailPage.scss'
const DetailPage = () => {
  const location = useLocation()
  const detailRef = useRef()
  const [readMore, setReadMore] = useState(false)
  const userData = useSelector((state) => state.userReducer)
  const { propDatas, userPage } = location.state
  const addFavoriteMoviete = () => {
    const id = detailRef.current.id
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
  const removeFavoriteMoviete = () => {
    const id = detailRef.current.id
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
  const openReadMore = () => {
    setReadMore(e => !e)
  }
  const opts = {
    small: {
      width: '300px',
      height: '300px'
    },
    middle: {
      width: '450px',
      height: '300px'
    },
    table: {
      width: '800px', height: '500px'
    }
  }
  return (
    <div className="detail-page__container">
      <MediaQuery minWidth={360} maxWidth={1024}>
        <div className="detail-page__header">
          <img className="detail-page__header__backdrop" src={propDatas.backdrop} alt="" />
          <div className="detail-page__header__wrapper">
            <div className="detail-page__header__posterAndbutton">
              <img src={propDatas.poster} alt="" className="detail-page__header__posterAndbutton__poster" />
              {userData.id.length !== 0
                ? (
                    userPage
                      ? <button className="detail-page__header__posterAndbutton__remove-button"
                      onClick={removeFavoriteMoviete} id={propDatas.subMovieTitle} ref={detailRef}><h4>移除</h4></button>
                      : <button className="detail-page__header__posterAndbutton__add-button"
                      onClick={addFavoriteMoviete} id={propDatas.id} ref={detailRef}><h4>收藏</h4></button>)
                : null}
            </div>
            <div className="detail-page__header__info">
              <h1 className="detail-page__header__info__title">{propDatas.name}</h1>
              <h4 className="detail-page__header__info__subTitle">{propDatas.subMovieTitle}</h4>
              <h3 className="detail-page__header__info__movieType">{propDatas.genres}</h3>
              <h3 className="detail-page__header__info__releaseDate">上映日期:{propDatas.date}</h3>
              <h6 className="detail-page__header__info__director">導演:{propDatas.director}</h6>
            </div>
          </div>
        </div>
        <div className="detail-page__description">
          <h5>{propDatas.description.length < 300 ? propDatas.description : (readMore ? propDatas.description : propDatas.description.slice(0, 100))}{propDatas.description.length < 300 ? (null) : (<button className="detail-page__description__read-more-button" onClick={openReadMore}>...展開全文</button>)}</h5>
        </div>
        <div className="detail-page__trailer">
          <MediaQuery minWidth={375} maxWidth={416}>
            {propDatas.trailer === 'none'
              ? <h1>尚無預告片</h1>
              : <YouTube videoId={propDatas.trailer} opts={opts.small} ></YouTube>}
          </MediaQuery>
          <MediaQuery minWidth={667} maxWidth={813}>
          {propDatas.trailer === 'none'
            ? <h1>尚無預告片</h1>
            : <YouTube videoId={propDatas.trailer} opts={opts.middle} ></YouTube>}
          </MediaQuery>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1024} maxWidth={2560}>
        <div className="detail-page__header">
          <img className="detail-page__header__backdrop" src={propDatas.backdrop} alt="" />
          <div className="detail-page__header__wrapper">
            <div className="detail-page__header__posterAndbutton">
              <img src={propDatas.poster} alt="" className="detail-page__header__posterAndbutton__poster" />
              {userData.id.length !== 0
                ? (
                    userPage
                      ? <button className="detail-page__header__posterAndbutton__remove-button"
                      onClick={removeFavoriteMoviete} id={propDatas.subMovieTitle} ref={detailRef}><h4>移除</h4></button>
                      : <button className="detail-page__header__posterAndbutton__add-button"
                      onClick={addFavoriteMoviete} id={propDatas.id} ref={detailRef}><h4>收藏</h4></button>)
                : null}
            </div>
            <div className="detail-page__header__info">
              <h1 className="detail-page__header__info__title">{propDatas.name}</h1>
              <h4 className="detail-page__header__info__subTitle">{propDatas.subMovieTitle}</h4>
              <h3 className="detail-page__header__info__movieType">{propDatas.genres}</h3>
              <h3 className="detail-page__header__info__releaseDate">上映日期:{propDatas.date}</h3>
              <h6 className="detail-page__header__info__director">導演:{propDatas.director}</h6>
            </div>
          </div>
        </div>
        <div className="detail-page__description">
          <h5>{propDatas.description}</h5>
        </div>
        <div className="detail-page__trailer">
          {propDatas.trailer === 'none'
            ? <h1>尚無預告片</h1>
            : <YouTube videoId={propDatas.trailer} opts={opts.table}></YouTube>}
        </div>
      </MediaQuery>
    </div>
  )
}

export default DetailPage
