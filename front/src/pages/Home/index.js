import React from "react";
import PropTypes from "prop-types";
//components
import { Table } from "../../components/Table";
//hooks
import { usePollutedCities } from "../../hooks/usePollutedCities";

export const Home = () => {
  const [pollutedCities] = usePollutedCities();
  return (
    <div>
      <h1>Polluted cities 🌍</h1>
      {pollutedCities && <Table data={pollutedCities} />}
    </div>
  );
};
