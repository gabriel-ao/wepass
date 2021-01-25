import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Button,
  Container,
  TextField,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// import { Card, CardTitle, CardText } from "../components/card/index.js";

import api from "../services/api";

import Header from "../components/header/index.js";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",

  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: "white",
  },
  laterais: {
    gridArea: "1 / 2 / 2 / 3",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "green",
  },
  laterais: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    minWidth: 20,
    // backgroundColor: "purple",
  },

  cards: {
    minWidth: 266,


    color: "#474747",
    background: "#fff",
    boxShadow: "2px 2px 5px #000",
    margin: 10,
    borderRadius: 8,
    fontSize: 18,
    padding: 5,
  },

  allDiv: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    overflowY: "auto",
    // backgroundColor: "blue",
  },
}));

export default function Events() {
  const classes = useStyles();
  let history = useHistory();

  //States
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [dataEvent, setDataEvent] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescribe] = useState("");

  const data = {
    title,
    dataEvent,
    price,
    category,
    describe,
  };

  function modifyState(response) {
    setEvents(response.data);
  }

  function handleCreateEvents() {
    history.push(`/registerEvent`);
  }

  async function handleDeleteEvent(id) {
    const token = localStorage.getItem("token");
    try {
      const res = await api.delete(`/event/${id}`, {
        headers: { "x-access-token": token },
      });
      getData();
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
      const response = await api.get("/event", {
        headers: { "x-access-token": token },
      });

      modifyState(response);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function HandleCreateCard(data) {
    return (
      <Card className={classes.cards}>
        <CardContent>
          <Typography> {data.title} </Typography>
          <Typography>{data.describe}</Typography>
          <Typography>{data.dataEvent}</Typography>
          <Typography> {data.price} </Typography>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              // onClick={() => handleCreateEvents()}
            >
              <EditIcon />
            </Button>
          </CardActions>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDeleteEvent(data.id)}
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />



     

      <Container className={classes.container}>

        <Grid item xs={12}>
          <p>Meus eventos</p>
          
          <div className={classes.allDiv}>
            {
            events.map((event) => HandleCreateCard(event))
            }
          </div>
          <p>Conheça novos lugares sem sair de casa</p>
          <div className={classes.allDiv}>
            {events.map((event) => HandleCreateCard(event))}
          </div>
          <p>Conheça novos lugares sem sair de casa</p>
          <div className={classes.allDiv}>
            {events.map((event) => HandleCreateCard(event))}
          </div>
        </Grid>

      </Container>
    </>
  );
}
