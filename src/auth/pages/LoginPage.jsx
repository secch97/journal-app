import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Router, Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title={"Login"}>
      <form autoComplete="off">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              name="email"
              label="E-mail"
              type="email"
              placeholder="yourmail@mail.com"
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
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google></Google>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent={"end"}>
            <Link component={RouterLink} color={"inherit"} to={"/auth/signup"}>
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
