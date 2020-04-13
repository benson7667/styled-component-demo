import styled from "styled-components";

export const GridView = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
`;
