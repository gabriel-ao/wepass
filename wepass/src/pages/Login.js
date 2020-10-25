import React, { Component, useState } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import Input from "../components/input/index.js";
import Button from "../components/button/index.js";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  function Cadastrar() {
    history.push(`/registeruser`);
  }
  async function handleClickLogin() {
    const data = {
      email,
      password,
    };

    console.table(data);
    try {
      const response = await api.post("/auth", data);

      localStorage.setItem("token", response.data.token);
      history.push(`/home`);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      <div className={classes.parent}>
        <div className={classes.div1}>
          <form className="mainLogin">
            <p className="Titulo">
              <a>Logue com seu E-mail</a>
            </p>
            <Input
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="senha"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </form>

          <Button onClick={() => handleClickLogin()}>logar</Button>
        </div>
      </div>

      <div className={classes.div2}>
        <p> Se não possui cadastro!</p>
        <Button onClick={() => Cadastrar()}> Clique aqui teste</Button>
      </div>
    </div>
  );
}

export default Login;
