import styled from "styled-components";

export const Ellipsis = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line && props.line};
  -webkit-box-orient: vertical;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
