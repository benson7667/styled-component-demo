import React, { Component } from "react";
import { UserIcon } from "../../../../assets/icons/iconList";
import { Button } from "../../../../shared/components";
import {
  AuthWrapper,
  LoginButton,
  LoginPopOverWrapper,
  LoginPopOver,
  LoginBenefitsWrapper,
  BenefitTitle,
  BenefitList,
  BenefitItem,
  ActionLoginWrapper,
} from "./styles";
import {
  LoginBenefitIcon1,
  LoginBenefitIcon2,
  LoginBenefitIcon3,
} from "../../../../assets/icons/iconList";

class UserAuth extends Component {
  state = {
    isPopUp: false,
  };

  handleHover = (e) => {
    this.setState({
      isPopUp: true,
    });
  };

  handleUnHover = (e) => {
    // if mouse move into login pop over, continue to show the popover
    if (e.relatedTarget.className.indexOf("login-pop-over") > -1) return;
    this.setState({
      isPopUp: false,
    });
  };

  render() {
    return (
      <AuthWrapper>
        <LoginButton
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleUnHover}
        >
          <img alt="user-icon" src={UserIcon} />
          <span>登录</span>
        </LoginButton>

        {this.state.isPopUp && (
          <LoginPopOverWrapper onMouseLeave={this.handleUnHover}>
            <LoginPopOver>
              <LoginBenefitsWrapper>
                <BenefitTitle>
                  <div />
                  <p>登录享受更多功能</p>
                  <div />
                </BenefitTitle>

                <BenefitList>
                  <BenefitItem>
                    <img alt="" src={LoginBenefitIcon1} />
                    <span>关注喜欢的作者</span>
                  </BenefitItem>
                  <BenefitItem>
                    <img alt="" src={LoginBenefitIcon2} />
                    <span>参与互动讨论</span>
                  </BenefitItem>
                  <BenefitItem>
                    <img alt="" src={LoginBenefitIcon3} />
                    <span>云同步观看历史</span>
                  </BenefitItem>
                </BenefitList>
              </LoginBenefitsWrapper>

              <ActionLoginWrapper>
                <Button
                  style={{ width: "140px" }}
                  textSize={12}
                  type="primary"
                  value="登陆"
                  onClick={() => {}}
                />
              </ActionLoginWrapper>
            </LoginPopOver>
          </LoginPopOverWrapper>
        )}
      </AuthWrapper>
    );
  }
}

export default UserAuth;
