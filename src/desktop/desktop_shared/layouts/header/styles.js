import styled from "styled-components";

export const HeaderContainer = styled.div`
  z-index: 30;
  height: 65px;
  display: flex;
  padding: 0 15px;
  min-width: 1024px;
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => `0px 3px 10px ${props.theme.lightGray2}`};
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MiddleWrapper = styled.div`
  width: 600px;

  @media screen and (max-width: 1400px) {
    max-width: 500px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 400px;
  }
`;

export const RightWrapper = styled.ul`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  & li {
    cursor: pointer;
    margin: 0 15px;
    list-style: none;

    & a {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: color 0.3s ease-in-out;
    }

    & p {
      font-size: 10px;
      margin-top: 4px;
    }

    :hover {
      & a {
        color: ${(props) => props.theme.primaryColor};
      }
    }
  }
`;

export const ListItem = styled.li``;
