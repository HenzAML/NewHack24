import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the custom theme

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </>
);