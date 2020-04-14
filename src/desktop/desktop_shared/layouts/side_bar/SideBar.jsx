import React, { Component } from "react";
import { bool } from "prop-types";
import {
  SideBarWrapper,
  SideBarList,
  SideBarListItem,
  SideBarGroupTitle,
  CollapsedSideBarWrapper,
  CollapsedSideBarListItem,
} from "./styles";
import { getWindowDimensions } from "../../../../shared/utils/layouts";
import { Link } from "../../../../shared/components";
import { sideBarItems, sideBarItemsCollapsed } from "./constants";

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
    const { isSidebarCollapsed, location } = this.props;

    if (isSidebarCollapsed) {
      return (
        <CollapsedSideBarWrapper>
          <SideBarList>
            {sideBarItemsCollapsed.map((item) => (
              <Link key={item.text} to={{ page: item.url }}>
                <CollapsedSideBarListItem
                  active={location.pathname === item.url}
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </CollapsedSideBarListItem>
              </Link>
            ))}
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
          {sideBarItems.map((item) => {
            if (!item.groupTitle) {
              return (
                <Link key={item.text} to={{ page: item.url }}>
                  <SideBarListItem active={location.pathname === item.url}>
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </SideBarListItem>
                </Link>
              );
            }

            return (
              <SideBarGroupTitle key={item.groupTitle}>
                {item.groupTitle}
              </SideBarGroupTitle>
            );
          })}

          <div style={{ height: "100px" }} />
        </SideBarList>
      </SideBarWrapper>
    );
  }
}

SideBar.propTypes = {
  isSidebarCollapsed: bool,
};

export default SideBar;
