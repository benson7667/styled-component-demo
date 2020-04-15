import styled from "styled-components";

export const AuthWrapper = styled.div`
  position: relative;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  display: flex;
  margin: 0 20px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 40px;
  padding: 8px;
  color: ${(props) => props.theme.primaryColor};

  & span {
    margin-left: 5px;
    font-size: 12px;
  }
`;

export const LoginPopOverWrapper = styled.div.attrs({
  className: "login-pop-over",
})`
  position: absolute;
  top: 38px;
  right: 0;
  padding-top: 20px;
`;

export const LoginPopOver = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  width: 300px;
  box-shadow: ${(props) => props.theme.shadow2};
`;

export const ActionLoginWrapper = styled.div`
  display: flex;
  padding: 12px;
  justify-content: center;
`;

export const LoginBenefitsWrapper = styled.div`
  display: column;
  width: 100%;
  background-color: ${(props) => props.theme.lightPink1};
  flex: 1;
  padding: 20px;

  & .benefits-title {
    display: flex;
  }
`;

export const BenefitTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & div {
    width: 40px;
    border-top: ${(props) => `1px solid ${props.theme.darkGray4}`};
    margin: 0 10px;
  }

  & p {
    font-weight: normal;
    text-align: center;
    font-size: 14px;
  }
`;

export const BenefitList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: ${(props) => props.theme.darkGray3};

  & img {
    width: 45px;
  }

  & span {
    margin-top: 4px;
  }
`;

export const BenefitItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
