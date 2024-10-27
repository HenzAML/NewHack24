// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#46CDCF',          // Primary button background color
      contrastText: '#ffffff',  // Ensures text is visible on primary buttons
    },
    secondary: {
      main: '#3D84A8',
      contrastText: '#ffffff',
    },
  },
});

export default theme;