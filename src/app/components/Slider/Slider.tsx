"use client"

// Types
import { SliderProps as Props } from "./types"

// Swiper
import { Swiper } from "swiper/react"

// Swipper Styles
import "swiper/scss"

export default function Slider({ children, configs }: Props) {
  return <Swiper {...configs}>{children}</Swiper>
}
