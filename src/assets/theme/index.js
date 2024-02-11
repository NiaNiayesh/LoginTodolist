import { createTheme } from "@mui/material";
import LinkThemeOption from "./components/Link";
import colors from "./base/colors";
import TypographyThemeOption from "./components/Typography";

const theme = createTheme({
  palette: { ...colors },

  direction: "rtl",

  components: {
    MuiTypography: { ...TypographyThemeOption },

    MuiLink: { ...LinkThemeOption },
    

  },
});

export default theme;
