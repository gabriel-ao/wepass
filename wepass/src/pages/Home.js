import React, { Component, useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";

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
    
    // backgroundColor: "blue",
  },

  laterais: {
    gridArea: "1 / 2 / 2 / 3",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
  },
  // grid: {
  //   direction: "row",
  //   justify: "center",
  //   alignItems: "center",
  // },
}));

function Home() {
  let history = useHistory();
  const classes = useStyles();

  //States
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [dataEvent, setDataEvent] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [describe, setDescribe] = useState("");
  const [state, setState] = React.useState({
    checkedB: true,
  });

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Desconectado");
    history.push("/login");
  }

  async function getDataUser() {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/user", {
        headers: { "x-access-token": token },
      });
      document.title = response.data.firstName;
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function getDataEvent() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.get("/events", {
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
        </CardContent>
      </Card>
    );
  }

  function modifyState(response) {
    setEvents(response.data);
  }

  useEffect(() => {
    getDataEvent();
  }, []);

  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <>
      <Header />

      <Container  className={classes.container}>
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

export default Home;
