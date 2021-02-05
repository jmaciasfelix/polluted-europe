import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//components
import { Table } from "../../components/Table";
import { Spinner } from "../../components/Spinner";
import { Podium } from "../../components/Podium";
//wouter
import { useLocation } from "wouter";
//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { usePollutedCities } from "../../hooks/usePollutedCities";

const Container = styled.div`
  width: 100%;

  h1 {
    color: var(--text-title-color);
    margin: 0;
    line-height: 1.15;
    font-size: 3rem;
    padding-top: 4rem;
  }
  div {
    text-align: center;
  }
  small {
    width: 100%;
    color: var(--text-small-color);
    line-height: 1.5;
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem;
  }
`;

export const Home = () => {
  const [pollutedCities, isLoading] = usePollutedCities();
  const [location, setLocation] = useLocation();
  const [localStorage, setLocalStorage] = useLocalStorage();

  const selectCity = (city, pollutionIndex, coordinate) => {
    const nameCity = city.replaceAll(",", "_");
    setLocalStorage(nameCity, { pollutionIndex, coordinate });
    setLocation(`map/${nameCity}`);
  };

  const sortByPollution = (cityA, cityB) =>
    cityA.pollutionIndex > cityB.pollutionIndex
      ? 1
      : cityB.pollutionIndex > cityA.pollutionIndex
      ? -1
      : 0;

  return (
    <Container>
      <div>
        <h1>🏆 TOP 20 CITIES POLLUTED IN EUROPE 🌍</h1>
        <small>Datos actualizados hace 1 horas</small>
      </div>

      {isLoading && <Spinner color={"#001e63"} />}

      {pollutedCities && (
        <>
          <Podium
            selectCity={selectCity}
            podiumCities={pollutedCities
              .sort(() => sortByPollution)
              .slice(0, 3)}
          />
          <Table selectCity={selectCity} pollutedCities={pollutedCities} />
        </>
      )}
    </Container>
  );
};
