import React from "react";
import { any } from "prop-types";
import { StyledAppContent, StyledAppContentPadded } from "./Styles";

const ContentWrapper = (props) => (
  <StyledAppContent>
    <StyledAppContentPadded>{props.children}</StyledAppContentPadded>
  </StyledAppContent>
);

ContentWrapper.propTypes = {
  children: any.isRequired,
};

export default ContentWrapper;
