import React from "react";
import "./App.css";
import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CoolBtn } from "./components/CoolBtn";

import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
      <Button
        color="primary"
        size="small"
        disableFocusRipple
        disableRipple
        classes={{ root: classes.btnStyle }}
      >
        simple button
      </Button>
      <Button color="primary" size="medium" variant="outlined">
        simple button
      </Button>
      <Button color="primary" size="large" variant="contained">
        simple button
      </Button>
      <DeleteIcon />

      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <hr />
      <hr />

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
