import React from "react";
import { connect } from "react-redux";

import SideBar from "./SideBar";
import { Actions } from "../../../desktop_shared/actions";

const SideBarContainer = (props) => <SideBar {...props} />;

const mapStateToProps = (state) => ({
  isSidebarCollapsed: state.appSetting.isSidebarCollapsed,
});

const mapDispatchToProps = {
  expandSideBar: Actions.EXPAND_SIDE_BAR,
  collapseSideBar: Actions.COLLAPSE_SIDE_BAR,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
