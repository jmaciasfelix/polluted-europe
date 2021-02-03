import React from "react";
import PropTypes from "prop-types";
//hooks
import { usePollutedCities } from "../../hooks/usePollutedCities";

export const Home = () => {
  const [pollutedCities] = usePollutedCities();
  return <h1>Polluted cities 🌍</h1>;
};
