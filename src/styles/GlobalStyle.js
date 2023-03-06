import { createGlobalStyle } from 'styled-components';
import img from 'assets/Picture/galaxyBlue.jpg';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Signika', sans-serif;
    position: relative;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
    background-attachment: fixed;
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
