import { Button } from "@mui/material";

const SButton = ({
  variant,
  type,
  color,
  fullWidth,
  sx,
  onClick,
  endIcon,
  children,
  ...other
}) => {
  return (
    <Button
      variant="contained"
      type={type}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      endIcon={endIcon}
      sx={sx}
      {...other}
    >
      {children}
    </Button>
  );
};

export default SButton;
