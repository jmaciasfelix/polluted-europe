import React from "react";
import { render, screen } from "@testing-library/react";
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

describe("Podium tests", () => {
  test("the pollution indices pass by props must be rendered", () => {
    const { getAllByText } = render(
      <Podium selectCity={() => {}} podiumCities={citiesPodium} />
    );
    const allPollutionIndex = getAllByText(/Index Polluted/i).map(
      (uiElement) => uiElement.textContent
    );
    const allPollutionIndexMock = citiesPodium.map(
      ({ pollutionIndex }) => `Index Polluted: ${pollutionIndex}`
    );
    expect(allPollutionIndex).toEqual(allPollutionIndexMock);
  });

  test("the cities pass by props must be rendered", () => {
    render(<Podium selectCity={() => {}} podiumCities={citiesPodium} />);
    const allNameCities = screen
      .getAllByRole("heading")
      .map((uiElement) => uiElement.textContent);
    const allNameCitiesMock = citiesPodium.map(({ city }) => city);

    expect(allNameCities).toEqual(allNameCitiesMock);
  });
});
