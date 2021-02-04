import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//Components
import { Map } from "../../components/Map";
import { Spinner } from "../../components/Spinner";
import { BackIcon } from "../../components/Icons/Back";
//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
//wouter
import { useLocation, Link } from "wouter";

export const City = () => {
  const [location, setLocation] = useLocation();
  const key = location.replaceAll("/map/", "");
  const [localStorage, setLocalStorage] = useLocalStorage(key);

  return (
    <div>
      <Link href="/">
        <i>
          <BackIcon />
        </i>
      </Link>
      <h1>Map </h1>
      <div>
        {localStorage ? (
          <Map
            pollutionIndex={localStorage.pollutionIndex}
            coordinate={localStorage.coordinate}
          />
        ) : (
          <Spinner color={"#001e63"} />
        )}
      </div>
    </div>
  );
};
