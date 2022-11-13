import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2? family= Signika:wght@300;400;500;700 & display=swap');

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
    background-color: ${({ theme }) => theme.bacgraund};
  }

  a, button {
    font-family: 'Signika', sans-serif;
  }
`;
