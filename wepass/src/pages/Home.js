import React, { Component, useState, useEffect } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import Header from "../components/header/index.js";

import Input from "../components/input/index.js";
// import Button from "../components/button/index.js";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  laterais: {
    gridArea: "1 / 2 / 2 / 3",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
  },
  grid: {
    direction: "row",
    justify: "center",
    alignItems: "center",
  },
}));

function Login() {
  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Desconectado");
    history.push("/login");
  }

  async function getData() {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/user", {
        headers: { "x-access-token": token },
      });
      document.title = response.data.firstName;

      alert(`ola ${response.data.firstName}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
      <Header />

      <Container maxWidth="sm-12" className={classes.container}>
        <Grid item xs={3} className={classes.laterais}>
          l
        </Grid>
        <Grid item xs={6}>
          <div>
            hello gabigol
            <Button onClick={() => handleLogout()}> Logout </Button>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.laterais}>
          l
        </Grid>
      </Container>
    </>
  );
}

export default Login;
