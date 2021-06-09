import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
// https://coolors.co/palettes/trending
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    black: {
      main: "#18191F",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    red: {
      main: "#d00000",
    },
    green: {
      main: "#80b918",
    },
    violet: {
      main: "#4d194d",
    },
    gray: {
      main: "#6c757d",
    },
    blue: {
      main: "#023e8a",
      secondary: "#0a9396",
    },
    yellow: {
      main: "#ffbe0b",
    },
  },
});

export default theme;
