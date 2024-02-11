import SInputRoot from "./SInputRoot";

const SInput = ({
  label,
  id,
  name,
  value,
  width,
  type,
  color,
  size,
  border,
  borderRadius,
  bgColor,
  fullWidth,
  sx,
  onChange,
  helperText,
  error,
  login,
  text,
  children,
  ...other
}) => {
  return (
    <SInputRoot
      label={label}
      id={id}
      name={name}
      value={value}
      type={type}
      fullWidth={fullWidth}
      onChange={onChange}
      helperText={helperText}
      error={error}
      sx={sx}
      ourstate={{
        width,
        type,
        color,
        size,
        border,
        borderRadius,
        bgColor,
        fullWidth,
        login,
        text,
        error,
        children,
        ...other,
      }}
      {...other}
    >
      {children}
    </SInputRoot>
  );
};

export default SInput
