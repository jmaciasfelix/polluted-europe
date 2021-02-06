import React from "react";
//pages
import { Home } from "./pages/Home";
import { City } from "./pages/City";
import { NotFound } from "./pages/NotFound";
//components
import { Layout } from "./components/Layout";
import { Footer } from "./components/Footer";
//wouter
import { Switch, Route } from "wouter";

const App = () => (
  <>
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/map/:coordinates" component={City} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    <Footer />
  </>
);

export default App;
