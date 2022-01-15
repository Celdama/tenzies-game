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
    font-family: 'Karla', sans-serif;
    background-color: #e76f51;
    height: 100vh;
  }

  #root {
    padding: 36px 30px;
    background-color: #0B2434;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    border-radius: 10px;
  }

  .App {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 5px;
    width: 410px;
    height: 429px;


    .title {
      font-size: 40px;
      margin: 0;
    }

    .game-information {
      margin: 0;
    }

    .instructions {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      margin-top: 0;
      text-align: center;
    }

    .dice-container {
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    button {
      background-color: #5035FF;
      width: 100px;
      height: 50px;
      box-shadow: 0px 3.2px 7.5px rgba(0, 0, 0, 0.18);
      border: none;
      margin-top: 30px;
      border-radius: 6px;
      color: #fff;
      font-family: 'Karla', sans-serif;
      font-size: 1.2rem;
      cursor: pointer;

      :active {
        box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
      }
    }
  }
`;
