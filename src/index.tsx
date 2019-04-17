import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StyleThemeProvider from './styles/StyleThemeProvider';
import { GlobalStyle } from './styles/GlobalStyle';
import './assets/style/reset.css';
import { Box } from './components/Box/Box';

ReactDOM.render(
  <StyleThemeProvider>
    <Box>
    <GlobalStyle />
    <App />
    </Box>
  </StyleThemeProvider>,
  document.getElementById('root')
);
