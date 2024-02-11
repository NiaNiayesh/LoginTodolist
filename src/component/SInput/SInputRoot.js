import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import colors from "../../assets/theme/base/colors";

const SInputRoot = styled(TextField)(({ state }) => {
  const { login, text } = state;

  let loginStyle = {
    "& .MuiFormHelperText-root": {
      color: colors.error + "!important",
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
