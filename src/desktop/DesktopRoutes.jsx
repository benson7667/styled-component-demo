import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Me, Error404 } from "./pages";

const DesktopRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Me} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default DesktopRoutes;
