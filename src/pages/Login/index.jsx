import { Container, Paper } from "@mui/material";
import React from "react";
import { PageLayout } from "../../layouts/PageLayout";
import LoginForm from "./Loginform/index";
import STypography from "../../component/STypography";

export default function Login() {
  return (
    <PageLayout>
      <Container maxWidth="sm">
        <Paper elevation={4}>
          <STypography
            variant="h3"
            align="center"
            sx={{ pb: 5 }}
          >
            Login
          </STypography>
          <STypography 
            variant="body1"  
            align="left"
            sx={{ mb: 2 }}
          >
            Login your account with username and password
          </STypography>
          <LoginForm />
        </Paper>
      </Container>
    </PageLayout>
  );
}
