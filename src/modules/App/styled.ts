import { createGlobalStyle } from 'styled-components/macro';
import { colors } from 'theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap&subset=latin-ext');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  } 

  html   {
    min-height: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    height: 100%;
    background-color: ${colors.background};
  }
`;
