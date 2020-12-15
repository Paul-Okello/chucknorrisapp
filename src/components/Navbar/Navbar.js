import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" className={classes.title}>
          CHUCK NORRIS API
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
