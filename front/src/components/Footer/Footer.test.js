import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Footer } from "./index";

describe("test display Footer component", () => {
    beforeEach(() => {
        render(<Footer />)
    })
    test("render Footer component", () => {
        expect(screen.getByText("Desarrollado por Jesús Macías")).toBeInTheDocument()
    })
    test("display all links", () => {
        expect(screen.getByText("GitHub")).toBeInTheDocument()
        expect(screen.getByText("Linkedin")).toBeInTheDocument()
    })
})