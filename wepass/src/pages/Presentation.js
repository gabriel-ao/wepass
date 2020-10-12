import React, { Component } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";

// import logo from '../logo.svg';
import logo_wepass from "../assets/wepass_final_fundo_branco_logo_roxo.png";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "white",
    color: "purple",
  },
}));

function Presentation() {
  const classes = useStyles();

  let history = useHistory();
  function Logar() {
    history.push(`/login`);
  }

  return (
    <div className={classes.container}>
      <img width="200" height="200" src={logo_wepass} />
      {/* <img src='./assets/wepass_final_fundo_branco_logo_roxo.png' /> */}
      <p>O WePass é um software com foco em aplicar estudos na prática!</p>

      <button onClick={() => Logar()}> Logar </button>
    </div>
  );
}

export default Presentation;
