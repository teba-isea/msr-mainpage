import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Lato','Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    h1,h2,h3,h4,h5,h6{
      text-shadow: 0 0 3px rgb(32 33 36 / 28%);
    }
    a{
      text-decoration:none;
      color:${(props) => props.theme.colors.anchor};
    }
  }
  body{
      background-color:${(props) => props.theme.colors.background};
  }
`;

export default GlobalStyles;
