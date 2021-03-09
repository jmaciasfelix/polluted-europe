import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./index";

describe("Test text Home page", () => {
  test("render Title", () => {
    render(<Home />);
    const titleElement = screen.getByText(/TOP 20 CITIES POLLUTED IN EUROPE/i);
    expect(titleElement).toBeInTheDocument();
  });
});
