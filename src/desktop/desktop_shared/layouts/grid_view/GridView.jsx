import React from "react";
import { number, object, string } from "prop-types";
import { Grid } from "./styles";

const GridView = (props) => {
  const { colNumber, colMinWidth, colMaxWidth, gapCol, gapRow, style } = props;

  return (
    <Grid
      gapCol={gapCol}
      gapRow={gapRow}
      colNumber={colNumber}
      colMaxWidth={colMaxWidth}
      colMinWidth={colMinWidth}
      style={{ ...style }}
    >
      {props.children}
    </Grid>
  );
};

GridView.propTypes = {
  gapCol: number,
  gapRow: number,
  colNumber: number,
  colMinWidth: string,
  colMaxWidth: string,
  style: object,
};

GridView.defaultProps = {
  gapCol: 10,
  gapRow: 30,
  colNumber: 4,
  colMaxWidth: "1fr",
};

export default GridView;
