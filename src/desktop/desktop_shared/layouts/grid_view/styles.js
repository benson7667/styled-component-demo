import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-column-gap: ${(props) => `${props.gapCol}px`};
  grid-row-gap: ${(props) => `${props.gapRow}px`};
  grid-template-columns: ${(props) => {
    const { colNumber, colMaxWidth, colMinWidth } = props;
    return `repeat(${colNumber}, minmax(${colMinWidth},${colMaxWidth}))`;
  }};
  grid-template-rows: ${(props) => props.rowHeight};
`;
