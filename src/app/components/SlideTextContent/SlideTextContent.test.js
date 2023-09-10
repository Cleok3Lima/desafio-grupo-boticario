/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"

import React from "react"
import { render } from "@testing-library/react"
import SlideTextContent from "./SlideTextContent"

// Mock props for testing
const testProps = {
  smallTitleContent: "Small Title",
  titleContent: "Title",
  numberOfButtons: 2,
  textColor: "black",
}

test("renders SlideTextContent component correctly", () => {
  const { getByText, container } = render(<SlideTextContent {...testProps} />)

  // Check if the small title text is rendered
  const smallTitleElement = getByText("Small Title")
  expect(smallTitleElement).toBeInTheDocument()

  // Check if the title text is rendered
  const titleElement = getByText("Title")
  expect(titleElement).toBeInTheDocument()

  // Check if the button set container is rendered for numberOfButtons >= 2
  const buttonSetContainer = container.querySelector(".button__set--container")
  expect(buttonSetContainer).toBeInTheDocument()

  // Check if the button set container is not rendered for numberOfButtons < 2
  const buttonWrapper = container.querySelector(".button-wrapper")
  expect(buttonWrapper).not.toBeInTheDocument()
})

// Test with empty string and numberOfButtons equal to 1
// Mock props for testing
const testProps2 = {
  smallTitleContent: "Small Title",
  titleContent: "Title",
  textColor: "",
  numberOfButtons: 1,
}

test("renders SlideTextContent component correctly", () => {
  const { getByText, container } = render(<SlideTextContent {...testProps2} />)

  // Check if the small title text is rendered
  const smallTitleElement = getByText("Small Title")
  expect(smallTitleElement).toBeInTheDocument()

  // Check if the title text is rendered
  const titleElement = getByText("Title")
  expect(titleElement).toBeInTheDocument()

  // Check if the button set container is not rendered for numberOfButtons < 2
  const buttonSetContainer = container.querySelector(".button__set--container")
  expect(buttonSetContainer).not.toBeInTheDocument()

  // Check if the button wrapper is rendered for numberOfButtons === 1
  const buttonWrapper = container.querySelector(".button-wrapper")
  expect(buttonWrapper).toBeInTheDocument()

  // Check if the text color class is not applied for empty string
  const textColorClass = container.querySelector(".content__header--black")
  expect(textColorClass).not.toBeInTheDocument()
})
