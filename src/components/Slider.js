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
  <Swiper navigation={true} loop={true}className="swiper" >
    {movieDatas.map((data,index)=>(<SwiperSlide className="swiper-item">
      <div className="swiper-card">
        <img className="swiper-card__img" key={index} src={data.backdrop} alt="" />
      </div>
    </SwiperSlide>))}
  </Swiper>
    </section>
  )
}

export default Slider
