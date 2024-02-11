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
      state={{
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
// import React from "react";
// import {
//   Grid,
//   InputAdornment,
//   TextField,
// } from "@mui/material";
// import {Person as PersonIcon } from "@mui/icons-material";
// import LockIcon from '@mui/icons-material/Lock';
// const STextField = ({
//   label,
//   id,
//   name,
//   variant,
//   fullWidth,
//   type,
//   value,
//   onChange,
//   error,
//   helperText,
//   sx,
//   ...other
// }) => {
//   return (
//     <Grid item xs={12}>
//       <TextField
//         label={label}
//         id={id}
//         name={name}
//         variant="outlined"
//         fullWidth={fullWidth}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               {id === "username" && <PersonIcon />}
//               {id === "password" && <LockIcon />}
//             </InputAdornment>
//           ),
//         }}
//         value={value}
//         onChange={onChange}
//         type={type}
//         error={error}
//         helperText={helperText}
//         sx={sx}
//         {...other}
//       />
//     </Grid>
//   );
// };

// export default STextField;