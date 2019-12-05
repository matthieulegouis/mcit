import React from "react";
import { render } from "@testing-library/react";
import Builder from "./Builder";

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
});

it("renders Builder", () => {
  const { getByText } = render(<Builder />);
  expect(getByText("Choose layout")).toBeInTheDocument();
});
