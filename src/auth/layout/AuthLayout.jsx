import { Grid, Typography } from "@mui/material";
import React from "react";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      height={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        item
        className="box-shadow"
        sm={6}
        xs={10}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
