import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Router, Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const SignUpPage = () => {
  return (
    <AuthLayout title={"Sign Up"}>
      <form autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="fullName"
              label="Full name"
              type="text"
              placeholder="Your full name"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="email"
              label="E-mail"
              type="email"
              placeholder="youremail@mail.com"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            ></TextField>
          </Grid>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
            sx={{ mt: 1, mb: 1 }}
          >
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent={"end"}>
            <Typography sx={{mr:1}}>Already have an account? </Typography>
            <Link component={RouterLink} color={"inherit"} to={"/auth/login"}>
              Log in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
