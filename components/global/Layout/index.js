import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../styles/global.css";
import theme from "../../../styles/theme";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
        <Footer />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default Layout;
