import React from "react";
import "./App.css";
import Routes from "./routes/index";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#6967da",
    color: "#fff",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Routes />;
    </div>
  );
}

export default App;
