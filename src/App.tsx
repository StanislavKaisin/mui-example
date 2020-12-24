import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  myStyle: { fontStyle: "oblique", color: red[500], fontSize: "1.9rem" },
  myButton: { color: green[500], borderWidth: "0.2rem" },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item>Header</Grid>
        <Grid item>Content</Grid>
      </Grid>
    </div>
  );
}

export default App;
