import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#38B6FF", // Light Blue
      contrastText: "#FFFFFF", // White text on primary
    },
    secondary: {
      main: "#004AAD", // Deep Blue
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#38B6FF", // Will be overridden if you use gradient via CSS
      paper: "#FFFFFF",
    },
    text: {
      primary: "#212121",
      secondary: "#666D73", // Button text gray
    },
    buttonGray: {
      main: "#666D73",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
