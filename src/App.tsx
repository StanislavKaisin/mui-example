import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  myStyle: { fontStyle: "oblique", color: red[500], fontSize: "1.9rem" },
  myButton: { color: green[500], borderWidth: "0.2rem" },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <h1>Hello World with tag</h1>
      <Typography variant="h4" color="primary" className={classes.myStyle}>
        Hello World with Typography
      </Typography>
      <Button color="secondary" variant="outlined" className={classes.myButton}>
        This is our first button
      </Button>
    </div>
  );
}

export default App;
