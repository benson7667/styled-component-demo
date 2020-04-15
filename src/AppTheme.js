import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#ff3183",
  accentColor: "#ff102b",

  darkGray1: "#333333",
  darkGray2: "#4a4a4a",
  darkGray3: "#838383",
  darkGray4: "#ababab",

  lightGray1: "#ececec",
  lightGray2: "#f0f0f0",

  lightPink1: "#fff2f8",

  shadow1: "0 5px 12px #e0e0e0",
  shadow2: "0 0px 20px #e0e0e0",

  scaffoldBackgroundColor: "#f7f7f7",
  white: "#ffffff",
  black: "#000",
  orange: "#e68c00",

  fontFamily: "Sans-serif",
};

const AppTheme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppTheme;
