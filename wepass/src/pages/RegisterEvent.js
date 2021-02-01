import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

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
  const [describe, setDescribe] = useState("");
  const [category, setCategory] = useState("");


  const data = {
    title,
    dataEvent,
    price,
    category,
    describe,
  };

  const currencies = [
    {
      value: 'Evento Online',
      label: 'Evento Online',
    },
    {
      value: 'Festas e shows',
      label: 'Festas e shows',
    },
    {
      value: 'Gastronomia',
      label: 'Gastronomia',
    },
    {
      value: 'free',
      label: 'Grátis',
    },
    {
      value: 'Outros',
      label: 'Outros',
    },
  ];
  // const [currency, setCurrency] = useState('Escolha uma categoria');

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

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
  }

  async function handleCreate() {
    const token = localStorage.getItem("token");
    try {
      const res = await api.post("/event", data, {
        headers: { "x-access-token": token },
      });

      history.push(`/events`);
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

  return (
    <>
      <Header />

      <Grid item xs={12} className={classes.div3}>
        <p>Crie seu evento e conecte o máximo de pessoas</p>
      </Grid>

      <Container className={classes.container}>
          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Titulo"
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
            id="datetime-local"
            label="Data do evento"
            type="datetime-local"
            defaultValue="2021-12-25T10:00"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={dataEvent}
            onChange={(event) => setDataEvent(event.target.value)}
          />

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Preço"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          {/* <TextField
            className={classes.input}
            id="filled-full-width"
            label="Categoria"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          /> */}

        <TextField
          className={classes.input}
          id="filled-select-currency"
          select
          label="Categoria"
          value={category}
          // onChange={handleChange}
          onChange={(event) => setCategory(event.target.value)}
          // helperText="Por favor escolha uma categoria"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

          <TextField
            className={classes.input}
            id="filled-full-width"
            label="Descrição"
            type="text"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            rowsMin={3}
            value={describe}
            onChange={(event) => setDescribe(event.target.value)}
          />
          
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleCreate()}
          >
            Criar evento
          </Button>
         
      </Container>
    </>
  );
}
