import styled from "@emotion/styled";
import { Box } from "@mui/material";
import colors from "../../assets/theme/base/colors";

const SBoxRoot = styled(Box)(({ ourstate }) => {
  const { todoBox } = ourstate;

  let todoBoxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100px",
    padding: "20px",
    backgroundColor: colors.secondary.light,
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 20px 20px -20px"
  };
  return {
    ...(todoBox && todoBoxStyle),
  };
});

export default SBoxRoot;
