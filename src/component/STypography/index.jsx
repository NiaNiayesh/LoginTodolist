import { Typography } from "@mui/material";

const STypography = ({
  variant,
  align = "center",
  color,
  sx,
  children,
  ...other
}) => {
  return (
    <Typography
      variant={variant}
      align={align}
      color={color}
      sx={sx}
      {...other}
    >
      {children}
    </Typography>
  );
};

export default STypography;
