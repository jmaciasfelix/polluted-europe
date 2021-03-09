import React from "react";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./index";

describe("test suite NotFound component", () => {
  test("render NotFound component", () => {
    render(<NotFound />);
    expect(screen.getByText(/404 Not Found .../i)).toBeInTheDocument();
  });
  test("check that img is not empty", () => {
    render(<NotFound />);
    expect(screen.getByRole("img").src).toBeDefined()
  });
});
