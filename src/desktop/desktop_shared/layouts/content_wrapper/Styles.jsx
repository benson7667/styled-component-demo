import styled from "styled-components";

export const StyledAppContent = styled.div`
  min-height: 100vh;
  min-width: 1024px;
  padding-left: ${(props) => (props.isSidebarCollapsed ? "65px" : "200px")};
`;

export const StyledAppContentPadded = styled.div`
  padding: 40px 80px;

  @media screen and (max-width: 1600px) {
    padding: 40px 30px;
  }
`;
