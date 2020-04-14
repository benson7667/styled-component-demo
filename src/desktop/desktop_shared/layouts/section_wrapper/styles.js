import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  margin-bottom: 40px;
`;

export const HasMoreText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${(props) => props.theme.darkGray3};
  margin-left: 10px;
`;

export const SectionTitle = styled.div`
  cursor: ${(props) => props.hasMore && "pointer"};
  display: flex;
  font-size: 22px;
  margin-bottom: 20px;

  &:hover,
  &:hover ${HasMoreText} {
    color: ${(props) => props.hasMore && props.theme.accentColor};
  }
`;
