import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

import DesktopRoutes from "./desktop/DesktopRoutes";
import AppTheme from "./AppTheme";

import XiguaFontTtf from "./assets/fonts/xigua-default-fonts.ttf";
import XiguaFontWoff2 from "./assets/fonts/xigua-default-fonts.woff2";

import store from "./store";

import * as serviceWorker from "./serviceWorker";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "XiguaDefaultFonts";
    src: local('XiguaDefaultFonts1'), local('XiguaDefaultFonts2'), url(${XiguaFontTtf}),url(${XiguaFontWoff2});
  }

  body {
    font-family: "XiguaDefaultFonts";
    background-color: ${(props) => props.theme.scaffoldBackgroundColor};

    & a {
      text-decoration:none;
      color: ${(props) => props.theme.darkGray1} 
    }
  
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <DesktopRoutes />
        <GlobalStyle />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
