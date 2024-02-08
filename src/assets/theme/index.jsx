import { createTheme } from "@mui/material";
import PaperThemeOption from "./components/Paper";
import ContainerThemeOption from "./components/Container";
import AppBarThemeOption from "./components/AppBar";
import OutlinedInputThemeOption from "./components/OutlinedInput";
import InputLabelThemeOption from "./components/InputLabel";
import LinkThemeOption from "./components/Link";
import ListItemThemeOption from "./components/ListItem";
import ButtonThemeOption from "./components/Button"

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
    h1: {
      fontSize: 52,
      fontWeight: 500,
    },
    h2: {
      fontSize: 50,
      fontWeight: 600,
 
    },
    h3: {
      fontSize: 50,
      fontWeight: 500,

    },
    body1: {
      fontSize: 17,
  
    },
  },

  palette: {
    primary: {
      main: "#00897B",
      light: "#80CBC4",
      dark: "#b2dfdb"
    },
    secondary: {
      main: "#c0ca33",
      light: "#cddc39",
      dark: "#afb42b"
    },
    error: {
      main: "#d32f2f",
      light: "#db5858",
      dark: "#932020"
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100"
    },
    success: {
      main: "#0288d1",
      light: "#4caf50",
      dark: "#01579b"
    },
    info: {
      main: "#2e7d32",
      light: "#03a9f4",
      dark: "#1b5e20"
    },
    white:{
      main: "#fff"
    },
    black:{
      main: "#333"
    }
  },

  direction: "rtl",

  components: {
    MuiContainer: { ...ContainerThemeOption },

    MuiPaper: { ...PaperThemeOption },

    MuiAppBar: { ...AppBarThemeOption },

    MuiOutlinedInput: { ...OutlinedInputThemeOption },

    MuiInputLabel: {...InputLabelThemeOption},

    MuiLink: {...LinkThemeOption},

    MuiListItem: {...ListItemThemeOption},

    MuiButton: {...ButtonThemeOption}
  },
});

export default theme;
