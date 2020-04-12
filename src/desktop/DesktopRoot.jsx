import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages";

const DesktopRoot = (props) => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>

      {/* more routes here... */}
    </Switch>
  </Router>
);

export default DesktopRoot;
