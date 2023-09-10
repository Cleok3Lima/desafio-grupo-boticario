/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"

import React from "react"
import { render } from "@testing-library/react"
import Button from "./Button"

// Mock props for testing
const testProps = {
  buttonType: "primary",
  buttonText: "Test Button",
  buttonHref: "https://example.com",
}

test("renders Button component correctly", () => {
  const { getByText } = render(<Button {...testProps} />)

  // Check if the button text is rendered
  const buttonTextElement = getByText("Test Button")
  expect(buttonTextElement).toBeInTheDocument()

  // Check if the button has the correct class names
  expect(buttonTextElement).toHaveClass("button__primary")
  expect(buttonTextElement).toHaveClass("button")

  // Check if the button has the correct href attribute
  expect(buttonTextElement).toHaveAttribute("href", "https://example.com")
})
