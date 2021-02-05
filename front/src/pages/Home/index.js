import React from "react";
import styled from "styled-components";
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
    padding-bottom: 0.4rem;
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
  figure {
    padding: 1rem 0;
    img {
      width: 100%;
    }
  }
`;

const Error = styled.h2`
  color: var(--text-subtitle-color);
  font-weight: 600;
  font-size: 32px;
  padding-right: 2rem;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Alert = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Retry = styled.div`
  button {
    align-items: center;
    background: #fff;
    border-radius: 50000px;
    border: 1px solid #000;
    box-shadow: #92d5ff 4px 4px;
    display: flex;
    font-size: 1.3rem;
    padding: 8px 18px;
    font-weight: 500;
    justify-content: center;
    line-height: 110%;
    @media (max-width: 600px) {
      font-size: 0.9rem;
      padding: 3px 16px;
    }
  }
  button:hover {
    background: rgb(210, 237, 255);
    box-shadow: none;
    transform: translate3d(4px, 4px, 0);
    transition: all 0.1s ease;
  }
`;

export const Home = () => {
  const [
    pollutedCities,
    isLoading,
    isError,
    retry,
    lastUpdate,
  ] = usePollutedCities();
  const [, setLocation] = useLocation();
  const [, setLocalStorage] = useLocalStorage();

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
        {!isError && !isLoading && <small>Last update on {lastUpdate}</small>}
      </div>

      {isLoading && <Spinner color={"#001e63"} />}

      {isError && !isLoading && (
        <div>
          <>
            <figure>
              <img
                src="https://media.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif"
                alt="Explosion"
              />
            </figure>
            <Alert>
              <Error>Error connection server</Error>
              <Retry>
                <button onClick={() => retry()}>Retry 🔃</button>
              </Retry>
            </Alert>
          </>
        </div>
      )}

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
