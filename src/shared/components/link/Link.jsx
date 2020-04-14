import React from "react";
import { any, object } from "prop-types";
import { Link as RouteLink, withRouter } from "react-router-dom";

const Link = ({ to, children }) => (
  <RouteLink
    to={{
      pathname: to.page,
      search: to.search,
      state: { ...to.state },
    }}
  >
    {children}
  </RouteLink>
);
Link.propTypes = {
  children: any,
  to: object,
};

export default withRouter(Link);
