import React, { useEffect } from "react";
import styled from "styled-components";
//Components
import { Map } from "../../components/Map";
import { Spinner } from "../../components/Spinner";
import { BackIcon } from "../../components/Icons/Back";
//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
//wouter
import { useLocation, Link } from "wouter";

const Container = styled.div`
  width: 100%;

  h1 {
    color: var(--text-title-color);
    margin: 0;
    line-height: 1.15;
    font-size: 3rem;
  }

  main {
    display: flex;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 4rem;
    div {
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const Info = styled.small`
  width: 100%;
  color: var(--text-small-color);
  line-height: 1.5;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem;
`;

export const City = () => {
  const [location, setLocation] = useLocation();
  const key = location.replaceAll("/map/", "");
  const [localStorage, , notExist] = useLocalStorage(key);

  const getCoordinates = () => {
    const { coordinate } = localStorage;
    return `${coordinate[1]}, ${coordinate[0]}`;
  };

  useEffect(() => {
    notExist && setLocation("/");
  }, [notExist]);

  return (
    <Container>
      {localStorage ? (
        <>
          <main>
            <Link href="/">
              <i>
                <BackIcon />
              </i>
            </Link>
            <div>
              <h1>MAP 🧭</h1>
              <Info>Coordinates {getCoordinates()}</Info>
            </div>
          </main>
          <Map
            pollutionIndex={localStorage.pollutionIndex}
            coordinate={localStorage.coordinate}
          />
        </>
      ) : (
        <Spinner color={"#001e63"} />
      )}
    </Container>
  );
};
