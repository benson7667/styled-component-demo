import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 220px;
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  margin-top: 75px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) =>
      props.isScrollbarTrackVisible ? props.theme.lightGray2 : "transparent"};
  }
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarListItem = styled.li`
  cursor: pointer;
  display: flex;
  padding: 10px 30px 10px;
  align-items: center;
  transition: color 0.4s ease-in-out;
  background-color: ${(props) =>
    props.active ? props.theme.white : "transparent"};
  transition: background-color 0.4s ease-in;
  color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.primaryGray};

  & a {
    text-decoration: none;
    margin-left: 25px;
    font-size: 14px;
    color: ${(props) =>
      props.active ? props.theme.primaryColor : props.theme.primaryGray};
  }

  :hover {
    background-color: ${(props) => !props.active && props.theme.lightGray1};
  }
`;

export const SideBarGroupTitle = styled.li`
  font-weight: bold;
  color: ${(props) => props.theme.primaryGray};
  font-size: 16px;
  padding: 10px 20px 10px;
  margin-top: 12px;
  border-top: ${(props) => `1px solid ${props.theme.lightGray1}`};
`;
