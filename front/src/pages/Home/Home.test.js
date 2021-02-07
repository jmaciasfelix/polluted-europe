import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./index";

describe("Test text Home page", () => {
  test("render Title", () => {
    const { getByText } = render(<Home />);
    const titleElement = getByText(/TOP 20 CITIES POLLUTED IN EUROPE/i);
    expect(titleElement).toBeInTheDocument();
  });
});
