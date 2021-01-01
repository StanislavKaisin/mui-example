import React from "react";
import "./App.css";
import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CoolBtn } from "./components/CoolBtn";

import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useTheme } from "@material-ui/core/styles";

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
    gutterBottom: {
      marginBottom: "2.6rem",
    },
    root: {
      height: "100vh",
      background: "linear-gradient(45deg, #FE688B 30%, #FF8E53 90%)",
    },
    btn: {
      backgroundColor: "blue",
      [theme.breakpoints.up("sm")]: { backgroundColor: "black" },
    },
  })
);

function App() {
  const theme = useTheme();
  console.log("theme=", theme);
  const classes = useStyles();
  // console.log("classes", classes);
  const cool = true;

  return (
    <>
      <div className={classes.root}>
        <Button color="primary" variant="contained" className={classes.btn}>
          simple button
        </Button>
        <Button color="secondary" variant="contained">
          simple button
        </Button>
        <Paper>
          <Typography variant="h1">Lorem ipsum!</Typography>
        </Paper>
      </div>
      <hr />
      <hr />
      <div>
        <Typography
          className={classes.gutterBottom}
          align="center"
          color="primary"
          gutterBottom
          // noWrap
          variant="h6"
          variantMapping={
            {
              // h1: "span",
            }
          }
        >
          simple topography Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Rerum maxime quas voluptatibus quod mollitia ipsam quasi libero
          sint non cumque, saepe quidem deleniti. Corrupti iste voluptatem
          dolores delectus nemo fuga vel? Quidem similique error eius rerum
          consectetur dignissimos! Quae repudiandae autem qui inventore, dolorum
          optio fugit nulla fugiat consequatur praesentium velit dolore hic
          maxime tenetur, aliquid similique accusantium, sed minima commodi
          repellat quod distinctio sequi laborum. Sunt obcaecati, dolorum quasi
          voluptatibus sit consequatur consequuntur temporibus ab. Cumque nobis
          delectus, eaque quod quasi sapiente. Illo accusamus exercitationem
          temporibus ipsa natus placeat praesentium magni obcaecati ex minus
          omnis, voluptate vel voluptatum! Modi.
        </Typography>
        <hr />
        <hr />
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
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid xs={false} item sm={2} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
