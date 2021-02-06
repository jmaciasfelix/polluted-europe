import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./index";

describe("Test text NotFound", () => {
  test("render Title", () => {
    const { getByText } = render(<NotFound />);
    const textElement = getByText(/404 Not Found .../i);
    expect(textElement).toBeInTheDocument();
  });
});