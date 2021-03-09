import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SliderFilter } from "./index";

describe('test suite Slider Filter component', () => {
    test("render without crash SliderFilter component", () => {
        const setFilter = jest.fn();
        const preFilteredRows = [
          {
            values: {
              pollutionIndex: 55,
            },
          },
          {
            values: {
              pollutionIndex: 78,
            },
          },
          {
            values: {
              pollutionIndex: 2.4,
            },
          },
        ];
        const column = {
          filterValue: null,
          id: "pollutionIndex",
          preFilteredRows,
          setFilter,
        };
        render(<SliderFilter column={column} />)
        expect(screen.getByRole('slider')).toBeInTheDocument()
    })
    test("set a new value in slider input", () => {
        const setFilter = jest.fn();
        const preFilteredRows = [
          {
            values: {
              pollutionIndex: 55,
            },
          },
          {
            values: {
              pollutionIndex: 78,
            },
          },
          {
            values: {
              pollutionIndex: 2.4,
            },
          },
        ];
        const column = {
          filterValue: null,
          id: "pollutionIndex",
          preFilteredRows,
          setFilter,
        };

        render(<SliderFilter column={column} />);
    
        const sliderInput = screen.getByRole('slider');
        fireEvent.change(sliderInput, { target: { value: 12 } })

        expect(setFilter).toHaveBeenCalledTimes(1)
        expect(setFilter).toHaveBeenCalledWith(12)
        //Esto no se cumple por que la funcion setFilter no hace nada. 
        //se tendria que ver como testear algo asi, react table
        //expect(sliderInput).toHaveValue(12)
      });
})
