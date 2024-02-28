import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { PageLayout } from "../../Components/Layouts/PageLayout";
import SignupForm from "./SignupForm/index";


export default function Signup() {
  return (
    <PageLayout>
      <Container maxWidth="sm" sx={{ mt: "150px" }}>
        <Paper elevation={4} sx={{ padding: "45px 60px" }}>
          <Typography variant="h3" align="center" sx={{ pb: 1 }}>
            Signup
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 3 }}>
            Create your account
          </Typography>
          <SignupForm />
        </Paper>
      </Container>
    </PageLayout>
  );
}
