import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  body, html, #app {
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    background-color: #ffffff;
    font-family: 'IBM Plex Mono', monospace;
  }
  @font-face {
      font-family: 'IBM Plex Mono';
      src: url('../assets/fonts/IBMPlexMono-ExtraLight.ttf')
  }
  a {
    text-decoration: none;
    color: inherit;
  } 
  button:focus, input:focus, select:focus {
    outline: none !important;
    box-shadow: 0 0 0 5px #E7EDF8;
  }

`;

export default GlobalStyle;