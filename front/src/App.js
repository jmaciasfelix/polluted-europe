import React from "react";
//pages
import { Home } from "./pages/Home";
//components
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
import { City } from "./pages/City";
//wouter
import { Switch, Route } from "wouter";

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/map/:coordinates" component={City} />
      </Switch>
    </Layout>
    <Footer />
  </>
);

export default App;
