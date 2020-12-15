import { CssBaseline } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <div className={classes.container}>
        <Navbar />
        <Search />
      </div>
    </div>
  );
};

export default App;
