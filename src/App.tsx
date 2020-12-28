import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  return (
    <div>
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
