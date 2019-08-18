import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}
html {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
body {
  min-height: 100%;
  color: #FFFFFF;
  background-color:#0a2859;
}
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
