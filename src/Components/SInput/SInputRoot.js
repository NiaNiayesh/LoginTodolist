import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { useTheme } from "@emotion/react";

const SInputRoot = styled(TextField)(({ ourstate }) => {
  const { login, text } = ourstate;
  const theme = useTheme()
  const {error} = theme.palette

  let loginStyle = {
    "& .MuiFormHelperText-root": {
      color: error + "!important",
      fontSize: "16px",
      fontWeight: "bold",
    },
    "& .MuiInputLabel-root": {
      fontSize: "17px",
    },
  };

  let textStyle = {
    "& .MuiInputBase-root": {
      width: "450px",      
      fontSize: "20px",
     

    },
    "& .MuiInputLabel-root": {
      fontSize: "20px",
      fontWeight: "bold !important",
    },
  };

  return {
    ...(login && loginStyle),
    ...(text && textStyle),
  };
});

export default SInputRoot;
