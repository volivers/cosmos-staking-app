import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: content-box;
  }
  html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #0c0e0f;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  h1 { 
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    margin: 0;
  }
  p {
    color: #656b6f;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.4;
    text-align: center;
    margin: 1rem 0;
  }
`;