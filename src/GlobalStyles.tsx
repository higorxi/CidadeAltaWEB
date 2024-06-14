import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graffiti';
    src: url('src/assets/fonts/Graffiti_City.otf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
