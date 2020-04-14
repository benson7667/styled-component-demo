import styled from "styled-components";

const SIDE_BAR_EXPAND_WIDTH = "200px";
const SIDE_BAR_COLLAPSED_WIDTH = "65px";
const SIDE_BAR_HIDE = "0px";

export const SideBarWrapper = styled.div`
  width: ${SIDE_BAR_EXPAND_WIDTH};
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  margin-top: 65px;
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
  padding: 10px 25px 10px;
  align-items: center;
  transition: color 0.4s ease-in-out;
  background-color: ${(props) => (props.active ? "#fff2f8" : "transparent")};
  transition: background-color 0.4s ease-in;
  color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.darkGray2};
  text-decoration: none;
  font-size: 12px;

  & span {
    margin-right: 15px;
  }

  :hover {
    background-color: ${(props) => !props.active && props.theme.lightGray1};
  }
`;

export const SideBarGroupTitle = styled.li`
  font-weight: bold;
  color: ${(props) => props.theme.primaryGray};
  font-size: 14px;
  padding: 10px 20px 10px;
  margin-top: 12px;
  border-top: ${(props) => `1px solid ${props.theme.lightGray1}`};
`;

export const CollapsedSideBarWrapper = styled.div`
  width: ${SIDE_BAR_COLLAPSED_WIDTH};
  background-color: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  margin-top: 65px;
`;

export const CollapsedSideBarListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  align-items: center;
  transition: color 0.4s ease-in-out;
  background-color: ${(props) => (props.active ? "#fff2f8" : "transparent")};
  transition: background-color 0.4s ease-in;
  color: ${(props) =>
    props.active ? props.theme.primaryColor : props.theme.darkGray2};
  font-size: 10px;
  text-decoration: none;

  & span:nth-child(1) {
    margin-bottom: 4px;
  }

  :hover {
    background-color: ${(props) => !props.active && props.theme.lightGray1};
  }
`;
