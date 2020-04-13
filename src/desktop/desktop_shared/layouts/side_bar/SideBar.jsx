import React, { Component } from "react";
import { bool, func } from "prop-types";
import { connect } from "react-redux";
import { withTheme } from "styled-components";
import { FiHome, FiMonitor, FiMusic } from "react-icons/fi";
import {
  SideBarWrapper,
  SideBarList,
  SideBarListItem,
  SideBarGroupTitle,
  CollapsedSideBarWrapper,
  CollapsedSideBarListItem,
} from "./Styles";
import { getWindowDimensions } from "../../../../shared/utils/layouts";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrollbarTrackVisible: false,
    };
  }

  componentDidMount() {
    this.handleWindowResize();
    if (window && typeof window !== "undefined") {
      window.addEventListener("resize", this.handleWindowResize);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    const { toggleSideBar, isSidebarCollapsed } = this.props;
    const { width } = getWindowDimensions(window);

    if (width > 1100 && isSidebarCollapsed) {
      toggleSideBar();
    }

    if (width < 1100 && !isSidebarCollapsed) {
      toggleSideBar();
    }
  };

  handleSetScrollbarTrack = () => {
    this.setState((prevState) => ({
      isScrollbarTrackVisible: !prevState.isScrollbarTrackVisible,
    }));
  };

  render() {
    const { isScrollbarTrackVisible } = this.state;
    const { isSidebarCollapsed } = this.props;

    if (isSidebarCollapsed) {
      return (
        <CollapsedSideBarWrapper>
          <SideBarList>
            <CollapsedSideBarListItem active>
              <FiHome size={15} />
              <a href="/">首页</a>
            </CollapsedSideBarListItem>

            <CollapsedSideBarListItem>
              <FiMonitor size={15} />
              <a href="/">电影</a>
            </CollapsedSideBarListItem>

            <CollapsedSideBarListItem>
              <FiMusic size={15} />
              <a href="/">音樂</a>
            </CollapsedSideBarListItem>
          </SideBarList>
        </CollapsedSideBarWrapper>
      );
    }

    return (
      <SideBarWrapper
        isScrollbarTrackVisible={isScrollbarTrackVisible}
        onMouseLeave={this.handleSetScrollbarTrack}
        onMouseEnter={this.handleSetScrollbarTrack}
      >
        <SideBarList>
          <SideBarListItem>
            <FiHome size={15} />
            <a href="/">首页</a>
          </SideBarListItem>
          <SideBarListItem active>
            <FiMonitor size={15} />
            <a href="/">电影</a>
          </SideBarListItem>
          <SideBarListItem>
            <FiMusic size={15} />
            <a href="/">音樂</a>
          </SideBarListItem>
          <SideBarGroupTitle>特色频道</SideBarGroupTitle>
          <SideBarListItem>
            <FiMusic size={15} />
            <a href="/">音樂</a>
          </SideBarListItem>
          <SideBarListItem>
            <FiHome size={15} />
            <a href="/">首页</a>
          </SideBarListItem>
          <SideBarListItem>
            <FiMonitor size={15} />
            <a href="/">电影</a>
          </SideBarListItem>

          <div style={{ height: "100px" }} />
        </SideBarList>
      </SideBarWrapper>
    );
  }
}

SideBar.propTypes = {
  isSidebarCollapsed: bool,
};

export default connect()(withTheme(SideBar));
