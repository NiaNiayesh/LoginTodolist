import { Button } from "@mui/material";
import SButtonRoot from "./SButtonRoot";


const SButton = ({
  width,
  variant,
  type,
  color,
  size,
  border,
  borderRadius,
  bgColor,
  fullWidth,
  sx,
  onClick,
  endIcon,
  children,
  ...other
}) => {


 
  return (
    <SButtonRoot
      variant="contained"
      type={type}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      endIcon={endIcon}
      // sx={{ ...buttonStyle, ...sx }}
      {...other}
    >
      {children}
    </SButtonRoot>
  );
};

export default SButton;
