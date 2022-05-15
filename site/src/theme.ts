import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      // default: "#dfccbb",
      default: "#dfccbbc2"
    },
    text: {
      primary: "#111111",
    },
    primary: {
      main: "#444444",
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
