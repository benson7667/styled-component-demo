import React from "react";
import { createGlobalStyle } from "styled-components";

import DesktopRoot from "./desktop/DesktopRoot";
// import MobileRoot from "./mobile/MobileRoot";

import XiguaFontTtf from "./assets/fonts/xigua-default-fonts.ttf";
import XiguaFontWoff2 from "./assets/fonts/xigua-default-fonts.woff2";

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
     color: ${(props) => props.theme.darkGray1} 
    }
  
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <DesktopRoot />
    </>
  );
};

export default App;
