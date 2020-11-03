import React, { Component, useState } from "react";
// import Input from "../components/input/index.js";
// import Button from "../components/button/index.js";

import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import api from "../services/api";
import { setRef } from "@material-ui/core";

import registerImage from "../assets/ilustrations/register/Add-User-rafiki.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "130vh",
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
  div3: { display: "flex", justifyContent: "center" },

  registerImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "green",
  },

  cadastrar: { display: "flex", justifyContent: "center", height: "50vh" },
}));

export default function RegisterUser() {
  const classes = useStyles();

  //States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [myForm, setMyForm] = useState({
    firstName: "",
    lastName: "",
    roles: "",
    email: "",
    password: "",
  });

  async function handleRegister() {
    const data = {
      firstName,
      lastName,
      roles,
      email,
      password,
    };

    try {
      await api.post("/user", data);
      alert("Cadastrado com sucesso");
      history.push(`/login`);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    // <div className="container">
    //   <p>cadastro de usuario</p>

    //   <Input
    //     placeholder="Primeiro Nome"
    //     value={firstName}
    //     onChange={(event) => setFirstName(event.target.value)}
    //   />
    //   <Input
    //     placeholder="Segundo Nome"
    //     value={lastName}
    //     onChange={(event) => setLastName(event.target.value)}
    //   />
    //   <Input
    //     placeholder="Roles"
    //     value={roles}
    //     onChange={(event) => setRoles(event.target.value)}
    //   />
    //   <Input
    //     placeholder="Email"
    //     value={email}
    //     onChange={(event) => setEmail(event.target.value)}
    //   />
    //   <Input
    //     placeholder="senha"
    //     value={password}
    //     type="password"
    //     onChange={(event) => setPassword(event.target.value)}
    //   />
    //   <Button onClick={() => handleRegister()}> Cadastre se </Button>
    // </div>

    <Container maxWidth="sm-12" className={classes.container}>
      <Grid item xs={3} className={classes.div2}></Grid>

      <Grid item xs={6}>
        <Grid item xs={12} className={classes.registerImage}>
          <img height="300" width="400" src={registerImage} />
        </Grid>

        <Grid item xs={12} className={classes.div3}>
          <p>Cadastre-se</p>
        </Grid>

        {/* <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "20px" }}
        >
          <TextField
            className={classes.input}
            required
            id="outlined-required"
            variant="outlined"
            placeholder="Primeiro Nome"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid> */}

        <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "10px" }}
        >
          {/* <TextField
            className={classes.input}
            required
            id="outlined-required"
            variant="outlined"
            placeholder="Segundo Nome"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          /> */}

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Primeiro nome"
            style={{ margin: 8 }}
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
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "20px" }}
        >
          {/* <TextField
            className={classes.input}
            required
            id="outlined-required"
            variant="outlined"
            placeholder="Roles"
            value={roles}
            onChange={(event) => setRoles(event.target.value)}
          /> */}

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Roles"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={roles}
            onChange={(event) => setRoles(event.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "20px" }}
        >
          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Email"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "20px" }}
        >
          <TextField
            className={classes.input}
            id="filled-full-width"
            label="password"
            style={{ margin: 8 }}
            // placeholder="Placeholder"
            type="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          className={classes.div3}
          style={{ paddingTop: "20px" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleRegister()}
          >
            Cadastre se
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={3} className={classes.div2}></Grid>
    </Container>
  );
}

// style={{ backgroundColor: "black" }}
