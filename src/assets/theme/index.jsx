import { createTheme } from "@mui/material";
import PaperThemeOption from "./components/Paper";
import ContainerThemeOption from "./components/Container";
import AppBarThemeOption from "./components/AppBar";
import OutlinedInputThemeOption from "./components/OutlinedInput";
import InputLabelThemeOption from "./components/InputLabel";
import LinkThemeOption from "./components/Link";
import ListItemThemeOption from "./components/ListItem";
import ButtonThemeOption from "./components/Button";
import colors from "./base/colors";
import TypographyThemeOption from "./components/Typography";

const theme = createTheme({
  palette: { ...colors },

  direction: "rtl",

  components: {
    MuiTypography: { ...TypographyThemeOption },

    MuiContainer: { ...ContainerThemeOption },

    MuiPaper: { ...PaperThemeOption },

    MuiAppBar: { ...AppBarThemeOption },

    MuiOutlinedInput: { ...OutlinedInputThemeOption },

    MuiInputLabel: { ...InputLabelThemeOption },

    MuiLink: { ...LinkThemeOption },
    
    MuiListItem: { ...ListItemThemeOption },

    MuiButton: { ...ButtonThemeOption },
  },
});

export default theme;
