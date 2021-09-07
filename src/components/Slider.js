import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import SwiperCore, {
  Navigation
} from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import './Slider.scss'
SwiperCore.use([Navigation])
const Slider = ({ movieDatas }) => {
  return (
    <section className="movie-card-slider-area">
      <h1>近期上映</h1>
      <Swiper navigation={true} className="swiper">
        {movieDatas.map((data, index) => (<SwiperSlide key={index} className="swiper-item">
          <div className="swiper-card">
            <img className="swiper-card__img" src={data.backdrop} alt="" />
            <h3 className="swiper-card__title">{data.name}</h3>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </section>
  )
}
Slider.propTypes = {
  movieDatas: PropTypes.array.isRequired
}
export default Slider
