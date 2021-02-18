import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { EsnackbarType, setSnackbar } from "../redux/ducks/snackbar";

export const Engineer = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Engineer page</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(setSnackbar(true, "Your are engineer now", "success"));
        }}
      >
        Apply the job
      </Button>
    </div>
  );
};
