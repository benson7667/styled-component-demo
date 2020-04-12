import React, { Component } from "react";
import { FiMenu, FiDownload, FiUpload, FiMonitor } from "react-icons/fi";

import SearchBar from "../../components/search_bar";
import Button from "../../../../shared/components/button";
import {
  HeaderContainer,
  LeftWrapper,
  MiddleWrapper,
  RightWrapper,
} from "./Styles";
import {
  XiguaLogoIcon,
  UserIcon,
  MenuIcon20,
  MonitorIcon20,
  DownloadIcon20,
  UploadIcon20,
} from "../../../../constants/icons";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftWrapper>
          <Button
            onClick={() => {}}
            icon={<FiMenu size={20} />}
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
              {DownloadIcon20}
              <p>下载APP</p>
            </a>
          </li>

          <li>
            <a href="/">
              {MonitorIcon20}
              <p>直播</p>
            </a>
          </li>

          <li>
            <a href="/">
              {UploadIcon20}
              <p>发布视频</p>
            </a>
          </li>

          <li>
            <div className="login-btn">
              <img alt="user-icon" src={UserIcon} />
              <span className="login-btn-text">登录</span>
            </div>
          </li>
        </RightWrapper>
      </HeaderContainer>
    );
  }
}

export default Header;
