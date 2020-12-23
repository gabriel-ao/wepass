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

export default function Profile() {
  const classes = useStyles();
  let history = useHistory();

  //States
  const [title, setTitle] = useState("");
  const [dataEvent, setDataEvent] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescribe] = useState("");
  const [userId, setUserId] = useState("");

  const data = {
    title,
    dataEvent,
    price,
    category,
    describe,
    userId,
  };
  function modifyState(response) {
    data.title = response.data.title;
    setTitle(data.title);
    data.dataEvent = response.data.dataEvent;
    setDataEvent(data.dataEvent);
    data.price = response.data.price;
    setPrice(data.price);
    data.category = response.data.category;
    setCategory(data.category);
    data.describe = response.data.describe;
    setDescribe(data.describe);
    data.userId = response.data.userId;
    setUserId(data.userId);
  }

  async function handleCreate() {
    const token = localStorage.getItem("token");

    try {
      const res = await api.post("/event", data, {
        headers: { "x-access-token": token },
      });

      console.log("response event ==>", res);
      alert("Evento criado com sucesso");
    } catch (error) {
      alert(error.response.data.message);
    }
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
        <p>Evento</p>
      </Grid>

      <Container maxWidth="sm-12" className={classes.container}>
        <Grid item xs={3} className={classes.div2}></Grid>
        <Grid item xs={6}>
          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Titulo"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Data do evento"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={dataEvent}
            onChange={(event) => setDataEvent(event.target.value)}
          />

          <Grid
            item
            xs={12}
            className={classes.div3}
            style={{ paddingTop: "20px" }}
          >
            <TextField
              className={classes.input}
              id="filled-full-width"
              label="Preço"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
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
              label="Categoria"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
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
              label="Descrição"
              style={{ margin: 8 }}
              // placeholder="Placeholder"
              type="text"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={describe}
              onChange={(event) => setDescribe(event.target.value)}
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
              onClick={() => handleCreate()}
            >
              Salvar
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={3} className={classes.div2}></Grid>
      </Container>
    </>
  );
}
