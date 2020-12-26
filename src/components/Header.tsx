import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>header</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};
