import React, { useEffect, useState } from "react";
import axios from "axios";
import JokeCard from "../JokeCard/JokeCard";
import useStyles from "./styles";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  CardMedia,
  CardActions,
  Typography,
  CssBaseline,
  TextField,
} from "@material-ui/core";

const Search = (props) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [jokes, setJokes] = useState({
    joke: "",
    id: "",
    image: "",
  });

  useEffect(() => {
    getRandomJoke();
  }, []);
  const getRandomJoke = async () => {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");

    console.log(data);
    setJokes({
      joke: data.value,
      image: data.icon_url,
      id: data.id,
    });
  };
  console.log(jokes);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${searchValue}`
    );
    setSearchResults(response.data.result);
    console.log(response.data.result);
    resetInputField();
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div>
        <form className={classes.search}>
          <TextField
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            className={classes.searchBar}
            placeholder="Search for Chuck Norris' Facts"
          />
          <Button
            type="submit"
            onClick={callSearchFunction}
            variant="contained"
            color="primary"
          >
            SEARCH FOR CHUCK NORRIS' FACTS
          </Button>
        </form>
        {searchResults.map((joke) => (
          <Grid stackable>
            <Grid item>
              <JokeCard joke={joke} />
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={jokes.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Generate A Chuck Joke 😄
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {jokes.joke}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.CardActions}>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={getRandomJoke}
                    variant="contained"
                  >
                    Get Another Joke
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Search;
