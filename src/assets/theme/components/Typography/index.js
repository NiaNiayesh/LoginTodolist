import colors from "../../base/colors";

const TypographyThemeOption = {
  styleOverrides: {
    root: {
      fontFamily: "Raleway, Arial",
      fontSize: "18px",
      color: colors.black.main,
    },

    h1: {
      fontWeight: 600,
    },
    h2: {
      fontSize: "50px",
      fontWeight: 800,
      color: colors.white.main
    },
    h3: {
      fontSize: "47px",
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "15px",
    },
    subtitle2: {
      fontSize: " 15px",
    },
    body1: {
        fontWeight: 500
    },
    body2: {
        fontWeight: 500
    },
  },
};

export default TypographyThemeOption;
