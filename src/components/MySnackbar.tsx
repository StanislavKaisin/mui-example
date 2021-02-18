import { makeStyles, Snackbar, Theme } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configureStore";
import { setSnackbar, snackBarState } from "../redux/ducks/snackbar";
import { theme } from "../theme";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export const MySnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snackbarOpen = useSelector((state: RootState) => {
    console.log("state=", state);
    return state.snackbar.snackbarOpen;
  });
  const snackbarType = useSelector((state: RootState) => {
    if (
      state.snackbar.snackbarType === "success" ||
      state.snackbar.snackbarType === "info" ||
      state.snackbar.snackbarType === "warning" ||
      state.snackbar.snackbarType === "error"
    ) {
      return state.snackbar.snackbarType;
    } else {
      return undefined;
    }
  });
  const snackbarMessage = useSelector(
    (state: RootState) => state.snackbar.snackbarMessage
  );
  const handleClose = (
    event?: React.SyntheticEvent<Element, Event>,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarMessage, snackbarType));
  };
  console.log("snackbarOpen=", snackbarOpen);
  console.log("snackbarType=", snackbarType);
  console.log("snackbarMessage=", snackbarMessage);
  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export enum EsnackbarType {
  "success",
  "info",
  "warning",
  "error",
  undefined,
}
