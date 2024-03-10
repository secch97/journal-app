import {StarOutline, StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "calc(100vh - 110px)", backgroundColor: "primary.main", borderRadius: 5}}
    >
      <Grid xs={12} item>
        <StarOutline sx={{fontSize:100, color:"white"}}></StarOutline>
      </Grid>
      <Grid xs={12} item>
        <Typography color={"white"} variant="h5">Select or Add an entry</Typography>
      </Grid>
    </Grid>
  );
};
