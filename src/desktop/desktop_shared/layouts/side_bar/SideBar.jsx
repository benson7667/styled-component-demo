import React, { Component } from "react";
import { withTheme } from "styled-components";
import { FiHome, FiMonitor, FiMusic } from "react-icons/fi";
import {
  SideBarWrapper,
  SideBarList,
  SideBarListItem,
  SideBarGroupTitle,
} from "./Styles";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarCollapsed: false,
      isScrollbarTrackVisible: false,
    };
  }

  handleToggleSideBarCollapse = () => {};

  handleSetScrollbarTrack = () => {
    this.setState((prevState) => ({
      isScrollbarTrackVisible: !prevState.isScrollbarTrackVisible,
    }));
  };

  render() {
    const { isScrollbarTrackVisible } = this.state;

    return (
      <SideBarWrapper
        isScrollbarTrackVisible={isScrollbarTrackVisible}
        onMouseLeave={this.handleSetScrollbarTrack}
        onMouseEnter={this.handleSetScrollbarTrack}
      >
        <SideBarList>
          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem active>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarGroupTitle>特色频道</SideBarGroupTitle>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarGroupTitle>特色频道</SideBarGroupTitle>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarGroupTitle>特色频道</SideBarGroupTitle>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarGroupTitle>特色频道</SideBarGroupTitle>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarGroupTitle>特色频道</SideBarGroupTitle>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiHome size={20} />
            <a href="/">首页</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMonitor size={20} />
            <a href="/">电影</a>
          </SideBarListItem>

          <SideBarListItem>
            <FiMusic size={20} />
            <a href="/">音樂</a>
          </SideBarListItem>

          <div style={{ height: "100px" }} />
        </SideBarList>
      </SideBarWrapper>
    );
  }
}

export default withTheme(SideBar);
