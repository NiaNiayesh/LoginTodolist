import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ padding: "25px" }}>
      <Typography variant="h2" align="center" sx={{ flexGrow: 1 }}>
        My Todolist Application
      </Typography>
    </AppBar>
  );
};

export default Header;
