import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Typography,
  Grid,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";



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
  message: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    alignItems: "center",
    fontSize: 18,
    
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,

    },
  },

  cards: {
    minWidth: 120,
    height: 104,

    color: "#474747",
    background: "#fff",
    backgroundColor: "#e9e9e9",
    margin: 10,
    borderRadius: 8,
    fontSize: 18,
    padding: 5,
    cursor: "pointer",
    transition: "background 0.2s",

    "&:hover": {
      backgroundColor:  "#ffffff",
      boxShadow: "2px 2px 5px #949494",
    },
    
    [theme.breakpoints.up("sm")]: {
      minWidth: 226,
      height: 210,

    },

    [theme.breakpoints.up("lg")]: {
      minWidth: 266,
      height: 250,

    },
  },

  allDiv: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
    overflowY: "auto",
    
    // "&::-webkit-scrollbar": {
    //   display: "none",
    // }

  },
}));

export default function Tickets() {
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

          <p className={classes.message}>
            {events  != 0 ? "Meus ingressos "  : " Voce ainda não tem ingressos "}
          </p>

          <div className={classes.allDiv}>
            {
            events.map((event) => HandleCreateCard(event))
            }
          </div>
        </Grid>

      </Container>
    </>
  );
}
