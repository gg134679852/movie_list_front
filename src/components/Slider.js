import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation
} from 'swiper/core'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import './Slider.scss'
SwiperCore.use([Navigation])
const Slider = ({movieDatas}) => { 
  
  return (
  <section className="movie-card-slider-area">
  <Swiper navigation={true} className="swiper">
    {movieDatas.map((data,index)=>(<SwiperSlide key={index} className="swiper-item">
      <div className="swiper-card">
        <img className="swiper-card__img"  src={data.backdrop} alt="" />
        <h3 className="swiper-card__title">{data.name}</h3>
        <button className="swiper-card__button" id={data.id}>
          <h4 className="swiper-card__button__text" id={data.id}>觀看預告片
          </h4>
        </button>
      </div>
    </SwiperSlide>))}
  </Swiper>
    </section>
  )
}

export default Slider
