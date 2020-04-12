import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: " #ff3183",
  accentColor: "#ff102b",

  darkGray1: "#333333",
  darkGray2: "#4a4a4a",

  lightGray1: "#ececec",
  lightGray2: "#f0f0f0",

  scaffoldBackgroundColor: "#f7f7f7",

  white: "#ffffff",
  black: "#000",

  fontFamily: "Sans-serif",
};

const AppTheme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default AppTheme;
