import React from "react";
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
  Typography,
} from "@mui/material";
import SButton from "../../../Components/SButton";
import SInput from "../../../Components/SInput";
import { Person as PersonIcon } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  userName: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      const getData = async () => {
        try {
          const response = await axios.post(
            "https://niyayesh.birkar.ir/User/Login/Login",
            {
              userName: values.userName,
              password: values.password,
              isActive: true,
            }
          );

          if (response.status === 200) {
            toast.success("Login Successfuly", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            Cookies.set("loginToken", response.data.token, { expires: 1 });
            navigate("/todolist");
          }
        } catch (error) {
          console.error(error);
          console.log(error.response.data.Message);
          toast.error("Invalid username or password", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      };
      getData();
    },
  });

  return (
    <FormControl component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SInput
            login
            label="Username*"
            id="userName"
            name="userName"
            type="text"
            fullWidth
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
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
          <Link href="/forgetpassword" variant="body1">
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
              <Typography variant="body1">Don't have an account?</Typography>
              <Link href="/signup" variant="body1">
                Signup
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
}
