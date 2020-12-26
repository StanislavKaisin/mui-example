import React from "react";
import "./App.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { Header } from "./components/Header";

const useStyles = makeStyles({
  myStyle: { fontStyle: "oblique", color: red[500], fontSize: "1.9rem" },
  myButton: { color: green[500], borderWidth: "0.2rem" },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction="column">
        <Grid item>
          <Header></Header>
        </Grid>
        <Grid item container>
          <Grid xs={false} sm={2} />
          <Grid xs={12} sm={8}>
            Content Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti architecto modi ratione corporis saepe? Saepe officia
            consequatur repellat facere accusantium animi excepturi, eius
            aperiam, commodi eveniet quisquam ex corporis vel autem facilis!
            Adipisci doloribus corporis deserunt, molestias quis tempora, animi
            repudiandae earum repellat in iure magnam soluta! Odio hic,
            voluptates tenetur iusto, odit quae cupiditate aspernatur, numquam
            officia fugit eaque eum sint veniam facere et quis nulla a dolorem
            magnam aut unde magni? Suscipit ab accusamus fuga sequi minima
            minus, pariatur sed provident vero iure temporibus perspiciatis
            incidunt error laudantium nam quas consequuntur commodi repellendus!
            Nam, laudantium commodi. Est, neque.
          </Grid>
          <Grid xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
