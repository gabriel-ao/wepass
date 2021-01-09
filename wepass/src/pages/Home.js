import React, { Component, useState, useEffect } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Card, CardTitle, CardText } from "../components/card/index.js";

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
    // backgroundColor: "red",
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

  // function HandleCreateCard(data) {
  //   return (
  //     <Card>
  //       <CardTitle> {data.title} </CardTitle>
  //       <CardText>{data.describe}</CardText>
  //       <CardText>{data.dataEvent}</CardText>
  //       <CardTitle> {data.price} </CardTitle>
  //     </Card>
  //   );
  // }

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

      <Container maxWidth="sm-12" className={classes.container}>
        <Grid item xs={3} className={classes.laterais}></Grid>
        <Grid item xs={6}>
          {/* {events.map((event) => HandleCreateCard(event))} */}
        </Grid>
        <Grid item xs={3} className={classes.laterais}></Grid>
      </Container>
    </>
  );
}

export default Login;
