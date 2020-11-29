import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../utils/theme";

const GlobalStyles = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    *{
      @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap');
      @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto");
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');      margin: 0;
      padding: 0;
      box-sizing: border-box; 
      font-family: 'Noto Sans JP', sans-serif;
    }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Layout;
