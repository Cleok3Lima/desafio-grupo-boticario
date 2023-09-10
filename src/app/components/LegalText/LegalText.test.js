/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom"

import React from "react"
import { render } from "@testing-library/react"
import LegalText from "./LegalText"

// Mock props for testing
const testProps = {
  legalText: "Legal Text Test",
}

test("renders LegalText component correctly", () => {
  const { getByText } = render(<LegalText {...testProps} />)

  // Check if the element text is rendered
  const legalTextElement = getByText("Legal Text Test")
  expect(legalTextElement).toBeInTheDocument()
})
