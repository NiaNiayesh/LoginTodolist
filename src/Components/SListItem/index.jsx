import SListItemRoot from "./SListItemRoot";

const SListItem = ({
  bgColor,
  width,
  height,
  borderRadius,
  todosList,
  sx,
  children,
  disableGutters,
  ...other
}) => {
  return (
    <SListItemRoot
      sx={sx}
      ourstate={{
        width,
        height,
        borderRadius,
        bgColor,
        todosList,
        children,
        disableGutters,
        ...other,
      }}
      {...other}
    >
      {children}
    </SListItemRoot>
  );
};

export default SListItem;
