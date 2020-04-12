import React from "react";
import { any } from "prop-types";
import { StyledAppContent, StyledAppContentPadded } from "./Styles";

const AppContent = (props) => (
  <StyledAppContent>
    <StyledAppContentPadded>{props.children}</StyledAppContentPadded>
  </StyledAppContent>
);

AppContent.propTypes = {
  children: any.isRequired,
};

export default AppContent;
