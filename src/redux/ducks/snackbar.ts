export const SET_SNACKBAR = "teamly/settings/SET_SNACKBAR";

export type snackBarState = typeof initialState;

export enum EsnackbarType {
  "success",
  "info",
  "warning",
  "error",
  undefined,
}

const initialState = {
  snackbarOpen: false,
  // snackbarType: EsnackbarType.success,
  snackbarType: "success",
  snackbarMessage: "",
};

export type actionSnackbar = {
  type: typeof SET_SNACKBAR;
  snackbarOpen: boolean;
  // snackbarType: EsnackbarType;
  snackbarType: string;
  snackbarMessage: string;
};

const snackbarReducer = (state = initialState, action: actionSnackbar) => {
  console.log("action=", action);
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarMessage, snackbarType } = action;
      console.log("snackbarMessage=", snackbarMessage);
      return {
        ...state,
        snackbarOpen,
        snackbarMessage,
        snackbarType,
      };
    default:
      return state;
  }
};

export default snackbarReducer;

export const setSnackbar = (
  snackbarOpen: boolean,
  snackbarMessage = "",
  snackbarType = EsnackbarType[0]
) => {
  console.log("snackbarMessage=", snackbarMessage);
  return { type: SET_SNACKBAR, snackbarOpen, snackbarMessage, snackbarType };
};
