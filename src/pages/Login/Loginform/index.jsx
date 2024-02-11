import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Grid,
  Link,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Checkbox,
  IconButton,
} from "@mui/material";
import SButton from "../../../component/SButton";
import STypography from "../../../component/STypography";
import SInput from "../../../component/SInput";
import { Person as PersonIcon } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

const validationSchema = yup.object({
  username: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (
        values.username === "niayesh@gmail.com" &&
        values.password === "nia12345"
      ) {
        toast.success("Login Successfuly", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate("/todolist");
      } else {
        toast.error("Invalid username or password", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    },
  });

  return (
    <FormControl component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SInput
            login
            label="Username*"
            id="username"
            name="username"
            type="text"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{<PersonIcon />}</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <SInput
            login
            label="Password*"
            id="password"
            name="password"
            fullWidth
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Link href="#" variant="body1">
            Forgot password?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <SButton
            login
            type="submit"
            fullWidth
            sx={{
              padding: 2,
              mt: 1,
            }}
          >
            Login
          </SButton>
          <Grid container display={"flex"} justifyContent={"center"} mt={3}>
            <Grid item display={"flex"}>
              <STypography variant="body1">Don't have an account?</STypography>
              <Link href="#" variant="body1">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
}
