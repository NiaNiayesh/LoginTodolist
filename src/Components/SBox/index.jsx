import SBoxRoot from "./SBoxRoot";

const SBox = ({
  bgColor,
  width,
  height,
  borderRadius,
  todoBox,
  sx,
  children,
  ...other
}) => {
  return (
    <SBoxRoot
      sx={sx}
      ourstate={{
        width,
        height,
        borderRadius,
        bgColor,
        todoBox,
        children,
        ...other,
      }}
      {...other}
    >
      {children}
    </SBoxRoot>
  );
};

export default SBox
