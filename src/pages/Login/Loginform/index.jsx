import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Grid,
  Link,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SButton from "../../../component/SButton";
import STypography from "../../../component/STypography";
import STextField from "../../../component/STextFiled"

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
          <STextField
            label="Username*"
            id="username"
            name="username"
            type="text"
            fullWidth
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}      
          />
        </Grid>
        <Grid item xs={12}>
          <STextField
            label="Password*"
            id="password"
            name="password"
            fullWidth
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
          <Link href="#" variant="body1" >
            Forgot password?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <SButton
            type="submit"
            fullWidth
            sx={{
              padding: 2,
              mt: 1,
              fontWeight: "bold",
            }}
          >
            Login
          </SButton>
          <Grid container display={"flex"} justifyContent={"center"} mt={3}>
            <Grid item display={"flex"} >
            <STypography
            variant="body1"
          >
            Don't have an account? 
          </STypography>
              <Link href="#" variant="body1" >
                 Sign Up
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FormControl>
  );
}
