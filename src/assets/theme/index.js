import { createTheme } from "@mui/material";
import PaperThemeOption from "./components/Paper";
import ContainerThemeOption from "./components/Container";
import AppBarThemeOption from "./components/AppBar";
import LinkThemeOption from "./components/Link";
import ListItemThemeOption from "./components/ListItem";
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


    MuiLink: { ...LinkThemeOption },
    
    MuiListItem: { ...ListItemThemeOption },

  },
});

export default theme;
