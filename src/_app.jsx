import 'intro.js/introjs.css';
import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import BaseLayout from './components/BaseLayout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <BaseLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
