import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Videos, Error404 } from "./pages";

const DesktopRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/yingshi" component={Videos} />
      <Route component={Error404} />
    </Switch>
  </Router>
);

export default DesktopRoutes;
