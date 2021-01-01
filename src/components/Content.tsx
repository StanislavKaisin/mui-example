import { Grid } from "@material-ui/core";
import React from "react";
import { MyCard } from "./MyCard";
import cofeeList from "../constants/constants";

export const Content = () => {
  return (
    <Grid container spacing={2}>
      {cofeeList.map((cofee) => {
        return (
          <Grid item xs={12} sm={4} key={cofee.title}>
            <MyCard {...cofee} />
          </Grid>
        );
      })}
    </Grid>
  );
};
