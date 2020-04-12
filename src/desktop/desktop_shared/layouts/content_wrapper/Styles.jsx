import styled from "styled-components";

export const StyledAppContent = styled.div`
  min-height: 100vh;
  padding-left: 220px;
`;

export const StyledAppContentPadded = styled.div`
  padding: 40px 30px;

  @media (max-width: 2000px) {
    padding: 40px 60px;
  }
`;
