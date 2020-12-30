import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";

interface CoolBtnProps {
  cool: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // btnStyle: {
    //   color: (props: CoolBtnProps) => (props.cool ? "blue" : "red"),
    // },
    btnStyle: {
      color: "red",
      [theme.breakpoints.up("sm")]: {
        color: "blue",
      },
      // backgroundColor: (props: CoolBtnProps) =>
      //   props.cool ? "yellow" : "orange",
    },
    btnBackgroundStyle: {
      backgroundColor: (props: CoolBtnProps) =>
        props.cool ? "yellow" : "orange",
    },
    // btnStyle: {
    //   color: "red",
    //   [theme.breakpoints.up("sm")]: {
    //     color: "blue",
    //   },
    // },
  })
);

export const CoolBtn = (props: CoolBtnProps) => {
  const classes = useStyles(props);
  return (
    <Button className={classes.btnStyle} fullWidth>
      CoolBtn button
    </Button>
  );
};
