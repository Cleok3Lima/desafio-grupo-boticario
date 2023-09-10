/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"

// Slider.test.js

import React from "react"
import { render } from "@testing-library/react"
import Slider from "./Slider"

jest.mock("swiper/react", () => {
  return {
    Swiper: ({ children }) => <div>{children}</div>,
    SwiperSlide: ({ children }) => <div>{children}</div>,
  }
})

// Mock para os estilos do Swiper
jest.mock("swiper/scss", () => {
  return {}
})
jest.mock("swiper/scss/effect-fade", () => {
  return {}
})
jest.mock("swiper/scss/navigation", () => {
  return {}
})
jest.mock("swiper/scss/pagination", () => {
  return {}
})

// Mock para os módulos do Swiper
jest.mock("swiper/modules", () => ({
  Pagination: jest.fn(),
  Navigation: jest.fn(),
  EffectFade: jest.fn(),
  Autoplay: jest.fn(),
}))

// Mock das props para o teste
const testProps = {
  children: <div>Conteúdo do Slider</div>,
  configs: {},
}

test("renders Slider component correctly", () => {
  const { getByText } = render(<Slider {...testProps} />)

  // Verifica se o conteúdo do Slider está presente
  const sliderContent = getByText("Conteúdo do Slider")
  expect(sliderContent).toBeInTheDocument()
})
