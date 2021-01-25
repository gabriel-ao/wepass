import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import api from "../services/api";

import Header from "../components/header/index.js";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    // backgroundColor: "blue",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    borderRadius: 3,
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

export default function Profile() {
  const classes = useStyles();

  //States
  const [firstName, setFirstName] = useState("teste");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  let history = useHistory();

  const data = {
    firstName,
    lastName,
    roles,
    email,
    // password,
  };

  function modifyState(response) {
    data.firstName = response.data.firstName;
    setFirstName(data.firstName);
    data.lastName = response.data.lastName;
    setLastName(data.lastName);
    data.roles = response.data.roles;
    setRoles(data.roles);
    data.email = response.data.email;
    setEmail(data.email);
  }
  async function handleUpdate() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.put("/user", data, {
        headers: { "x-access-token": token },
      });
      modifyState(response);
      alert("Atualizado com sucesso");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  async function getData() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.get("/user", {
        headers: { "x-access-token": token },
      });

      modifyState(response);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <Grid item xs={12} className={classes.div3}>
        <p>Perfil</p>
      </Grid>

      <Container className={classes.container}>



          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Primeiro nome"

            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Segund nome"

            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Roles"

            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={roles}
            onChange={(event) => setRoles(event.target.value)}
          />

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Email"

            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
      

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpdate()}
          >
            Salvar
          </Button>

      </Container>
    </>
  );
}
