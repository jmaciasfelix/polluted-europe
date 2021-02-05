import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//components
import { Table } from "../../components/Table";
import { Spinner } from "../../components/Spinner";
import { Podium } from "../../components/Podium";
//hooks
import { usePollutedCities } from "../../hooks/usePollutedCities";

export const Home = () => {
  const [pollutedCities, isLoading] = usePollutedCities();
  return (
    <div>
      <h1>Polluted cities 🌍</h1>

      {isLoading && <Spinner color={"#001e63"} />}

      {pollutedCities && (
        <>
          <Podium />
          <Table pollutedCities={pollutedCities} />
        </>
      )}
    </div>
  );
};
