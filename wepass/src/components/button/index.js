import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  purpleButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function Button({ children = "clique aqui", onClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button
        className={classes.purpleButton}
        variant="contained"
        color="primary"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
    // <Button variant="contained" color="primary">
    //   Primary
    // </Button>
  );
}

export default Button;
