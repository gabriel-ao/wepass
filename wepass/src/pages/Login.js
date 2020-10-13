import React, { Component } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import Button from "../components/button/index";

const useStyles = makeStyles(() => ({
  parent: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridColumnGap: "0",
    gridRowGap: "0",
  },

  div1: {
    gridArea: "1 / 2 / 2 / 3",
    textAlign: "center",
  },

  div2: {
    gridArea: "5 / 3 / 6 / 4",
    textAlign: "center",
  },
}));

function Login() {
  const classes = useStyles();

  let history = useHistory();
  function Cadastrar() {
    history.push(`/registeruser`);
  }

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.div1}>
          <form className="mainLogin">
            <p className="Titulo">
              <a>Logue com seu E-mail</a>
            </p>
            <input className="Caixa" />
          </form>

          <Button>
            <a>logar</a>
          </Button>
        </div>
      </div>

      <div className={classes.div2}>
        <p> Se não possui cadastro!</p>
        <Button onClick={() => Cadastrar()}> Clique aqui</Button>
      </div>
    </div>
  );
}

export default Login;
