import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../button/index.js";

const useStyles = makeStyles(() => ({
  buttonLogin: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Header({ children = "clique aqui", onClick }) {
  const classes = useStyles();

  let history = useHistory();
  function Logar() {
    history.push(`/login`);
  }

  return (
    <div position="static">
      <toolbar>
        <Button
          className={classes.buttonLogin}
          color="inherit"
          onClick={() => Logar()}
        >
          Login
        </Button>
      </toolbar>
    </div>
  );
}

export default Header;
