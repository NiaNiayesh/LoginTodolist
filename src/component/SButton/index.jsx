import { Button } from "@mui/material";

const SButton = ({
  variant = "contained",
  type,
  color = "primary",
  fullWidth,
  sx,
  onClick,
  endIcon,
  children,
  ...other
}) => {
  return (
    <Button
      variant={variant}
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
