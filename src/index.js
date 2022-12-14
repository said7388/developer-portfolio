import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import ThemeContextProvider from './contexts/theme-context';
import './index.css';
import reportWebVitals from './reportWebVitals';
const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ThemeContextProvider>
);

reportWebVitals();
