import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.

//https://codepen.io/FlyC/pen/LEVbKP
// https://www.noisetexturegenerator.com/
const theme = createTheme({
  palette: {
    background: { 
      default: '#f0ebe2' 
    },
    text: {
      primary: "#111111"
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
