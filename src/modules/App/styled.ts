import { createGlobalStyle } from 'styled-components/macro';
import { colors } from 'theme';

export const GlobalStyles = createGlobalStyle`
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
