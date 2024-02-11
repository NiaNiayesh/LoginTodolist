import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { PageLayout } from "../../layouts/PageLayout";
import LoginForm from "./Loginform/index";

export default function Login() {
  return (
    <PageLayout>
      <Container maxWidth="sm" sx={{ mt: "150px" }}>
        <Paper elevation={4} sx={{ padding: "45px 60px" }}>
          <Typography variant="h3" align="center" sx={{ pb: 5 }}>
            Login
          </Typography>
          <Typography variant="body1" align="left" sx={{ mb: 2 }}>
            Login your account with username and password
          </Typography>
          <LoginForm />
        </Paper>
      </Container>
    </PageLayout>
  );
}
