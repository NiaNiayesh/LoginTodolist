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
  login,
  add,
  edit,
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
      sx={sx}
      ourstate={{
        width,
        variant,
        type,
        color,
        size,
        border,
        borderRadius,
        bgColor,
        fullWidth,
        onClick,
        endIcon,
        login,
        add,
        edit,
        children,
        ...other,
      }}
      {...other}
    >
      {children}
    </SButtonRoot>
  );
};

export default SButton;
