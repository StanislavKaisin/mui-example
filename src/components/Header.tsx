import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles({
  typographyStyles: { flex: 1 },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>header</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};
