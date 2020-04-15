import React, { Component } from "react";
import { connect } from "react-redux";
import { FiMenu, FiDownload, FiUpload, FiMonitor } from "react-icons/fi";

import SearchBar from "../../components/search_bar";
import { Button } from "../../../../shared/components";
import UserAuth from "../../../desktop_shared/components/user_auth";

import { Actions } from "../../../desktop_shared/actions";
import { XiguaLogoIcon } from "../../../../assets/icons/iconList";
import {
  HeaderContainer,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
} from "./styles";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftWrapper>
          <Button
            onClick={this.props.toggleSideBar}
            icon={<FiMenu size={15} />}
            style={{ marginRight: "20px" }}
          />
          <a href="/">
            <img alt="xigua-logo" src={XiguaLogoIcon} />
          </a>
        </LeftWrapper>

        <MiddleWrapper>
          <SearchBar />
        </MiddleWrapper>

        <RightWrapper>
          <li>
            <a href="/">
              <FiDownload size={15} />
              <p>下载APP</p>
            </a>
          </li>

          <li>
            <a href="/">
              <FiMonitor size={15} />
              <p>直播</p>
            </a>
          </li>

          <li>
            <a href="/">
              <FiUpload size={15} />
              <p>发布视频</p>
            </a>
          </li>

          <UserAuth />
        </RightWrapper>
      </HeaderContainer>
    );
  }
}

const mapDispatchToProps = {
  toggleSideBar: Actions.TOGGLE_SIDE_BAR,
};

export default connect(null, mapDispatchToProps)(Header);
