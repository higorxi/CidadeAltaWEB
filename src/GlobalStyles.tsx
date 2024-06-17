import { createGlobalStyle } from 'styled-components';
import fontGraphiti from '../src/assets/fonts/Graffiti_City.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graffiti';
    src: url(${fontGraphiti}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
