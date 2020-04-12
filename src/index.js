import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import AppTheme from "./AppTheme";

import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.scaffoldBackgroundColor}
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppTheme>
      <App />
      <GlobalStyle />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
