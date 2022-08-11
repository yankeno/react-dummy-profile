import React from "react";
import { Grid } from "@mui/material";
import BodyCard from "./BodyCard";

const Content = () => {
  return (
    <Grid container spacing={1} style={{ "margin-top": "1px" }}>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
      <Grid item xs={4}>
        <BodyCard />
      </Grid>
    </Grid>
  );
};

export default Content;
