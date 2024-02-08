import React from "react";
import {
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import {Person as PersonIcon } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
const STextField = ({
  label,
  id,
  name,
  variant = "outlined",
  fullWidth,
  type,
  value,
  onChange,
  error,
  helperText,
  sx,
  ...other
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        label={label}
        id={id}
        name={name}
        variant={variant}
        fullWidth={fullWidth}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {id === "username" && <PersonIcon />}
              {id === "password" && <LockIcon />}
            </InputAdornment>
          ),
        }}
        value={value}
        onChange={onChange}
        type={type}
        error={error}
        helperText={helperText}
        sx={sx}
        {...other}
      />
    </Grid>
  );
};

export default STextField;