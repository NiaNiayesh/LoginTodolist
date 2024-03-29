import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { PageLayout } from "../../Components/Layouts/PageLayout";
import LoginForm from "./Loginform/index";
export default function Login() {
  return (
    <PageLayout>
      <Container maxWidth="sm" sx={{ mt: "150px" }}>
        <Paper elevation={4} sx={{ padding: "45px 60px" }}>
          <Typography variant="h3" align="center" sx={{ pb: 2 }}>
            Login
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
           Hello, welcome back
          </Typography>
          <LoginForm />
        </Paper>
      </Container>
    </PageLayout>
  );
}
