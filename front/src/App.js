import React from "react";
import PropTypes from "prop-types";
//pages
import { Home } from "./pages/Home";
//components
import { Layout } from "./components/Layout";

const App = () => (
  <Layout>
    <Home />
  </Layout>
);

export default App;
