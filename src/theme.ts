import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import blue from "@material-ui/core/colors/blue";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  typography: { fontFamily: "Helvetica" },
});
