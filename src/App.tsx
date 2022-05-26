import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/MainRoute';
import { theme } from './theme/theme.config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRoute />        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
