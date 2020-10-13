import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
// logo
import logo_wepass from "../assets/wepass_final_fundo branco.png";

import Button from "../components/button/index";

const useStyles = makeStyles(() => ({
  // container: {
  //   backgroundColor: "#6967da",
  //   color: "#fff",
  // },

  parent: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridColumnGap: "0",
    gridRowGap: "0",
  },

  div1: {
    gridArea: "2 / 2 / 3 / 3",
    textAlign: "center",
  },

  div2: {
    gridArea: "1 / 2 / 2 / 3",
    textAlign: "center",
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
      <div className={classes.parent}>
        <div className={classes.div2}>
          <img width="400" height="400" src={logo_wepass} />
        </div>

        <div className={classes.div1}>
          <p>O WePass é um software com foco em aplicar estudos na prática!</p>
          <Button onClick={() => Logar()}> Logar </Button>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
