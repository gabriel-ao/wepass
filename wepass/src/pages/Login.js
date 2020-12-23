import React, { Component, useState } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import Input from "../components/input/index.js";
import login from "../assets/ilustrations/login/login.svg";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "120vh",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: "white",
  },
  div2: {
    gridArea: "1 / 2 / 2 / 3",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
  },
  div3: { display: "flex", justifyContent: "center", paddingTop: "20px" },

  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    paddingTop: "50px",
    // backgroundColor: "green",
  },

  cadastrar: { display: "flex", justifyContent: "center", height: "50vh" },

  dadosLogin: {
    paddingTop: "60px",
  },
}));

function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  function Cadastrar() {
    history.push(`/registerUser`);
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
    <Container maxWidth="sm-12" className={classes.container}>
      <Grid item xs={3} className={classes.div2}></Grid>

      <Grid item xs={6}>
        <Grid item xs={12} className={classes.login}>
          <img height="500" width="600" src={login} />
        </Grid>

        <div className={classes.dadosLogin}>
          <Grid
            item
            xs={12}
            className={classes.div3}
            // style={{ paddingTop: "20px" }}
          >
            <TextField
              className={classes.input}
              required
              id="outlined-required"
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.div3}
            // style={{ paddingTop: "10px" }}
          >
            <TextField
              className={classes.input}
              required
              id="outlined-required"
              variant="outlined"
              placeholder="senha"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            className={classes.div3}
            // style={{ paddingTop: "20px" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleClickLogin()}
            >
              logar
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.div3}>
            <p> Se não possui cadastro!</p>
            <Button style={{ color: "white" }} onClick={() => Cadastrar()}>
              Clique aqui
            </Button>
          </Grid>

          {/* <Grid item xs={12} className={classes.div3}>
            <Button style={{ color: "white" }} onClick={() => Cadastrar()}>
              {" "}
              Clique aqui
            </Button>
          </Grid> */}
        </div>
      </Grid>

      <Grid item xs={3} className={classes.div2}></Grid>
    </Container>
  );
}

export default Login;

// style={{ backgroundColor: "black" }}
