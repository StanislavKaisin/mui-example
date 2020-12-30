import React from "react";
import "./App.css";
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CoolBtn } from "./components/CoolBtn";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnStyle: {
      // padding: theme.spacing(2)
      color: "red",
      border: "none",
      marginBottom: "1rem",
    },
    textStyle: {
      color: "green",
    },
  })
);

function App() {
  const classes = useStyles();
  // console.log("classes", classes);
  const cool = true;
  return (
    <div>
      {/* <Grid container direction="column"> */}
      <Button className={classes.btnStyle}>small button</Button>
      <Button className={classes.btnStyle}>another small button</Button>
      <h1 className={classes.textStyle}>my header</h1>
      <CoolBtn cool={cool} />
      <hr />
      {/* </Grid> */}

      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container>
          <Grid xs={false} sm={2} />
          <Grid xs={12} sm={8}>
            <Content />
          </Grid>
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
