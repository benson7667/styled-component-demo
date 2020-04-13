import React from "react";
import { connect } from "react-redux";

import SideBar from "./SideBar";
import { Actions } from "../../../desktop_shared/actions";

const SideBarContainer = (props) => <SideBar {...props} />;

const mapStateToProps = (state) => ({
  isSidebarCollapsed: state.appSetting.isSidebarCollapsed,
});

const mapDispatchToProps = {
  toggleSideBar: Actions.TOGGLE_SIDE_BAR,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);
