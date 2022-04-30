import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#dfccbb",
    },
    text: {
      primary: "#111111",
    },
    primary: {
      main: "#f0ebe2",
    },
    secondary: {
      main: "#f0ebe2",
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
