import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "160px",
  },
});

export const MyDrawer = () => {
  const classes = useStyles();
  const itemsList = [
    { text: "Home", icon: <InboxIcon />, onClick: () => history.push("/") },
    { text: "About", onClick: () => history.push("/about") },
    {
      text: "Contact",
      icon: <MailIcon />,
      onClick: () => history.push("/contact"),
    },
  ];
  const history = useHistory();
  // console.log("history=", history);
  return (
    <Drawer variant="temporary" className={classes.drawer}>
      <List>
        {itemsList.map(({ text, onClick }, index) => (
          <ListItem button key={text + index} onClick={onClick}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
