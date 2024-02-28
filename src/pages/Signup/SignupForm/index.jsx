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

const validationSchema = yup.object({
  username: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function SignupForm() {

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
      const getData = async () => {
    try{
          const response = await axios.post(
            "https://dummyjson.com/auth/login",
            {
              username: values.username,
              password: values.password,
              // isActive: true,

            }
          );
          console.log(response);
          

          if (response.status === 200) {
            toast.success("Login Successfuly", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
            navigate("/todolist");
          }else {
        
                toast.error("Invalid username or password", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    });          }
          }catch(error){
            console.error(error)
          }
        }
      getData();

      // if (
      //   values.username === "niayesh@gmail.com" &&
      //   values.password === "nia12345"
      // ) {
      //   toast.success("Login Successfuly", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      //   navigate("/todolist");
      // } else {
      //   toast.error("Invalid username or password", {
      //     position: toast.POSITION.BOTTOM_RIGHT,
      //   });
      // }
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
        <Grid item xs={12}>
          <SInput
            login
            label="Confirm Password*"
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
              <Typography variant="body1">Already have an account?</Typography>
              <Link href="/" variant="body1" >
              Login
               
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
}
