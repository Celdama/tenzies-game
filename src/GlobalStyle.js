import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {

  }

  * {
    box-sizing: border-box;

  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: palegoldenrod;
    height: 100vh;
  }

  #root {
    padding: 30px;
    background-color: #0B2434;
  }

  .App {
    background-color: white;
    border-radius: 5px;
    width: 360px;
    height: 379px;
  }
`;
