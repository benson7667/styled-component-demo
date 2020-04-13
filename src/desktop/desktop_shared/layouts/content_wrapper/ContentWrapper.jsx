import React from "react";
import { connect } from "react-redux";
import { any } from "prop-types";
import { StyledAppContent, StyledAppContentPadded } from "./Styles";

const ContentWrapper = (props) => (
  <StyledAppContent isSidebarCollapsed={props.isSidebarCollapsed}>
    <StyledAppContentPadded>{props.children}</StyledAppContentPadded>
  </StyledAppContent>
);

ContentWrapper.propTypes = {
  children: any.isRequired,
};

const mapStateToProps = (state) => ({
  isSidebarCollapsed: state.appSetting.isSidebarCollapsed,
});

export default connect(mapStateToProps, null)(ContentWrapper);
