import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { Podium } from "./index";

const citiesPodium = [
  {
    rank: 1,
    city: "Varna,Bulgaria",
    pollutionIndex: 62.66,
    coordinate: [27.91667, 43.21667],
  },
  {
    rank: 2,
    city: "Moscow,Russia",
    pollutionIndex: 62.25,
    coordinate: [37.6172, 55.7508],
  },
  {
    rank: 3,
    city: "Belgrade,Serbia",
    pollutionIndex: 60.16,
    coordinate: [20.457273, 44.787197],
  },
];


describe("test display Podium", () => {
  beforeEach(() => {
    const selectCityFn = jest.fn()
    render(<Podium selectCity={selectCityFn} podiumCities={citiesPodium} />)
  })
  test("render Podium component successfuly", () => {
    const nameCity = citiesPodium[0].city
    expect(screen.getByText(nameCity)).toBeInTheDocument()
  })
  test("should display the cities podium pass from props", () => {
    const renderValue = screen.queryAllByText(/Index Polluted/i).map((uiElement) => uiElement.textContent);
    const expectedValue = citiesPodium.map(({ pollutionIndex }) => `Index Polluted: ${pollutionIndex}`);

    expect(renderValue).toEqual(expectedValue);
  });
  
});

describe('test actions Podium', () => {
  test("should be possible click a Podium", () => {
    const selectCityFn = jest.fn()
    render(<Podium selectCity={selectCityFn} podiumCities={citiesPodium} />)
    const cardPodium = screen.getAllByRole('role-podium')[0]
    
    expect(cardPodium).toBeInTheDocument()
    
    userEvent.click(cardPodium)
    expect(selectCityFn).toHaveBeenCalledTimes(1)
  });
})