import { Container, Typography } from "@mui/material";
import React from "react";
import { PageLayout } from "../../Components/Layouts/PageLayout";
import SInput from "../../Components/SInput";
import SButton from "../../Components/SButton";

export default function ForgotPassword() {
  return (
    <PageLayout>
      <Container maxWidth="md" sx={{ mt: "160px", display:"flex", flexDirection:"column"}}>
        <Typography variant="h4">Reset password</Typography>
        <Typography variant="body1" sx={{mt: "15px"}}>
          To reset your account password, enter the email address you registered
          with, and we'll send your instructions to reset your password.
        </Typography>
        <SInput
            login
            label="Email*"
            id="email"
            name="email"
            type="email"
            sx={{mt: "20px", width: "60%"}}
            
          />
          <SButton
            confirm
            type="submit"
            sx={{
              mt: "20px",
            }}
          >Confirm</SButton>
      </Container>
    </PageLayout>
  );
}
