import {
  Button,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";

const useStyles = makeStyles({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "150px",
    width: "100%",
    backgroundSize: "contain",
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
});

interface MyCardProps {
  title?: string;
  price?: string;
  description?: string;
  avatarUrl?: string;
  imageUrl?: string;
}

export const MyCard = (props: MyCardProps) => {
  const classes = useStyles();
  const { avatarUrl, title, price, description, imageUrl } = props;
  const bull = <span className={classes.bullet}>•</span>;
  // console.log("props=", props);
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={avatarUrl}
          />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia className={classes.media} image={imageUrl} title={title} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          buy now
        </Button>
        <Button size="small" color="primary" variant="outlined">
          offer
        </Button>
      </CardActions>
    </Card>
  );
};
