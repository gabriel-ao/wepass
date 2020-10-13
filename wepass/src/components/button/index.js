import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  purpleButton: {
    background: "#fff",
    color: "#6967da",
    // fontSize: "30",
    // borderRadius: "65",
  },
}));

function Button({ children = "clique aqui", onClick }) {
  const classes = useStyles();

  return (
    <button className={classes.purpleButton} onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
