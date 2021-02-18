import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { EsnackbarType, setSnackbar } from "../redux/ducks/snackbar";

export const Marketer = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Marketer page</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(setSnackbar(true, "Your are not marketer yet", "error"));
        }}
      >
        Apply the job
      </Button>
    </div>
  );
};
