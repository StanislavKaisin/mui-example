import React, { useState } from "react";
import "./App.css";
import {
  Button,
  createStyles,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Switch,
  Theme,
  Typography,
} from "@material-ui/core";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { CoolBtn } from "./components/CoolBtn";

import DeleteIcon from "@material-ui/icons/Delete";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  createMuiTheme,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

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
  const [darkMode, setDarkMode] = useState(false);
  const insideTheme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  const greenTheme = createMuiTheme({
    palette: {
      primary: green,
      secondary: green,
    },
  });
  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100px" }}
        direction="column"
      >
        {/* <Grid container justify="flex-end"> */}
        {/* <Grid container justify="space-between"> */}
        {/* <Grid container justify="space-around"> */}
        {/* <Grid container justify="space-evenly"> */}
        {/* <Grid item xs={3} style={{ textAlign: "center" }}> */}
        {/* <Grid item xs={3}> */}
        <Grid>
          <AcUnitIcon color="primary" />
        </Grid>
        <Grid item>
          <AcUnitIcon color="secondary" />
        </Grid>
      </Grid>
      <hr />
      <hr />
      <Grid container spacing={1} direction="column">
        <Grid item xs={12} container>
          <Grid item xs={2}>
            <Paper>welcome</Paper>
          </Grid>
          <Grid item xs={8}></Grid>
          <Grid item xs={2}>
            <Paper>
              <Button>Logout</Button>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
          {/* Divider is like: ---------------------------- */}
        </Grid>
        <Grid container xs={12} spacing={1} justify="space-around">
          <Grid container xs={6}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              accusantium inventore rerum quibusdam nemo sed vel tempora.
              Tempora, suscipit cum!
            </Typography>
          </Grid>
          <Grid container xs={6}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              accusantium inventore rerum quibusdam nemo sed vel tempora.
              Tempora, suscipit cum!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={1} direction="column">
        <Grid item xs={12} sm={6} lg={4}>
          <Paper>xs=12 sm=6 lg=4</Paper>
        </Grid>
        <Grid item xs={12} container spacing={1}>
          <Grid item xs={3}>
            <Paper>xs=3 inside item container</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3 inside item container</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3 inside item container</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3 inside item container</Paper>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>xs=3</Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper>xs=7</Paper>
        </Grid>
      </Grid>
      <hr />
      <hr />
      <ThemeProvider theme={darkMode ? darkTheme : greenTheme}>
        <Paper style={{ height: "100vh" }}>
          <Grid container direction="column">
            <Typography variant="h6">Theme changing example</Typography>
            <Button variant="contained" color="primary">
              Button
            </Button>
            <Button variant="contained" color="secondary">
              Another Button
            </Button>
            <Switch checked={darkMode} onChange={handleChange}></Switch>
          </Grid>
        </Paper>
      </ThemeProvider>
      <hr />
      <hr />
      <Paper elevation={6} style={{ borderRadius: "16px" }}>
        <Typography variant="h6">
          Typography inside paper Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Tempora, accusamus hic laudantium sint qui quibusdam
          illum eaque minima nemo commodi?
        </Typography>
      </Paper>
      <hr />
      <hr />
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
