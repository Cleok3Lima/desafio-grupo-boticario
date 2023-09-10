"use client"

// Swiper
import Slider from "../Slider/Slider"
import { SwiperSlide } from "swiper/react"
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules"
import "swiper/scss"
import "swiper/scss/effect-fade"
import "swiper/scss/navigation"
import "swiper/scss/pagination"

import { slides } from "./slides"

import styles from "./styles.module.scss"

export default function Slideshow() {
  const slideshowConfigs = {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    loop: true,
    lazy: "true",
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index: number, className: string) {
        return (
          '<div class="' +
          styles.paginationDots +
          " " +
          className +
          '"><span></span></div>'
        )
      },
    },
    modules: [Pagination, Navigation, EffectFade, Autoplay],
    effect: "fade",
  }

  return (
    <section className={styles.sliderContainer}>
      <Slider configs={slideshowConfigs}>
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={index}>{slide.content}</SwiperSlide>
        ))}
        <div className={`pagination ${styles.pagination}`}></div>
      </Slider>
    </section>
  )
}
