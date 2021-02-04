import React from "react";
import PropTypes from "prop-types";
//components
import { Table } from "../../components/Table";
import { Spinner } from "../../components/Spinner";
//hooks
import { usePollutedCities } from "../../hooks/usePollutedCities";

export const Home = () => {
  const [pollutedCities, isLoading] = usePollutedCities();
  return (
    <div>
      <h1>Polluted cities 🌍</h1>
      {pollutedCities && <Table pollutedCities={pollutedCities} />}
      {isLoading && <Spinner color={"#001e63"} />}
    </div>
  );
};
