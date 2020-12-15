import React from "react";
import {
  Button,
  Card,
  Chip,
  CardContent,
  CardActions,
  Typography,
  withStyles,
} from "@material-ui/core";
import useStyles from "./styles";

const Category = withStyles({
  root: {
    marginTop: 10,
    marginBottom: 10,
  },
})(Chip);

const JokeCard = ({ joke, index }) => {
  console.log(joke);
  const classes = useStyles();
  return (
    <Card className={classes.card} id={`joke-${index}`}>
      <CardContent className={classes.cardContent}>
        {joke.categories.length > 0 ? (
          joke.categories.map((cat) => (
            <Category label={cat} key={cat} variant="outlined" />
          ))
        ) : (
          <Category label="regular" variant="outlined" />
        )}
        <Typography>{joke.value}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}></CardActions>
    </Card>
  );
};

export default JokeCard;
