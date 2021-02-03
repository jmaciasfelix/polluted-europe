import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//hooks
import { usePollutedCities } from "../../hooks/usePollutedCities";

const Home = () => {
  const [pollutedCities] = usePollutedCities();
  return <h1>Polluted cities 🌍</h1>;
};

export default Home;
