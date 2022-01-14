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
    padding: 36px 30px;
    background-color: #0B2434;
  }

  .App {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 5px;
    width: 410px;
    height: 429px;

    .dice-container {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }

    button {
      background-color: #5035FF;
      width: 92px;
      height: 35px;
      box-shadow: 0px 3.2px 7.68px rgba(0, 0, 0, 0.18);
      border: none;
      border-radius: 6px;
      color: #fff;
      font-family: 'Karla', sans-serif;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
