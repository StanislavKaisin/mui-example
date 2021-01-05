import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: purple[500],
    //   // main: "#fff",
    // },
    // secondary: {
    //   main: green[500],
    // },
    // primary: green,
    // secondary: purple,
    type: "light",
    // type: "light",
  },
  typography: {
    fontFamily: "Arial",
    h6: { fontSize: "1rem" },
  },
});
