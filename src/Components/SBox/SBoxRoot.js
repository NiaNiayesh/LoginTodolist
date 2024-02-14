import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";

const SBoxRoot = styled(Box)(({ ourstate }) => {
  const { todoBox } = ourstate;
  const theme = useTheme()
  const {secondary} = theme.palette

  let todoBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100px",
    padding: "20px",
    backgroundColor: secondary.light,
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px"
  };
  return {
    ...(todoBox && todoBoxStyle),
  };
});

export default SBoxRoot;
