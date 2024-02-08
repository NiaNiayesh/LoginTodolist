import * as React from "react";
import AppBar from "@mui/material/AppBar";
import STypography from "../../component/STypography/index"

const Header = () => {
  return (
    <AppBar >
      <STypography
        variant="h2"
        color="white"
        align="center"
        sx={{ flexGrow: 1}}
      >
        My Todolist Application
      </STypography>
    </AppBar>
  );
};

export default Header;
