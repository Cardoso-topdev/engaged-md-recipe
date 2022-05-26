import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    text:{
      primary: "#FFFFFF",
      secondary: '#000000'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  typography: {
    fontSize: 16
  }
})