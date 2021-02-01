/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, useState, useEffect } from "react";
// make styles
import {
  makeStyles,
  Grid,
  Button,
  Container,
  Card,
  CardContent,
  Modal,
  Backdrop,
  Fade 
} from "@material-ui/core";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


// styled component
import { Title, TextCard, ConfigurationButtons, DateCard } from "../components/Card/styles";


import { useHistory } from "react-router-dom";

import api from "../services/api";

import Header from "../components/header/index.js";
  
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  cards: {
    minWidth: 160,
    height: 140,

    color: "#474747",
    background: "#fff",
    backgroundColor: "#e9e9e9",
    margin: 5,
    borderRadius: 8,
    fontSize: 18,
    padding: 2,
    cursor: "pointer",
    transition: "background 0.2s",

    "&:hover": {
      backgroundColor:  "#ffffff",
      boxShadow: "2px 2px 5px #949494",
    },
    
    [theme.breakpoints.up("sm")]: {
      minWidth: 226,
      height: 210,
      margin: 10,
      padding: 5,


    },

    [theme.breakpoints.up("lg")]: {
      minWidth: 266,
      height: 250,
      margin: 10,
      padding: 5,

    },
  },

  allDiv: {
    display: "flex",
    flexDirection: "row",
    margin: 1,
    overflowY: "auto",
    
    // backgroundColor: "blue",
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6967da",
    opacity: "0.2",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 500,
    width:  1280,
    margin: 30,
    marginTop: 40,
    borderRadius: 8,

    [theme.breakpoints.up("sm")]: {
      height: 550,
    },

    [theme.breakpoints.up("md")]: {
      height: 600,
    },

    [theme.breakpoints.up("lg")]: {
      height: 650,
    },

    [theme.breakpoints.up("xl")]: {
      height: 700,
    },
  },
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

  // modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <CardContent >
          <Title>{data.title}</Title>
          <DateCard>{data.dataEvent}</DateCard>
          <TextCard>{data.describe}</TextCard>
        </CardContent>
        <ConfigurationButtons>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
          >
            <MoreHorizIcon />
          </Button>

          <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="spring-modal-title">Spring modal</h2>
                <p id="spring-modal-description">react-spring animates me.</p>
              </div>
            </Fade>
          </Modal>
        </ConfigurationButtons>
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
            events.slice(0).reverse().map((event) => HandleCreateCard(event))
            }
          </div>
          <p>Conheça novos lugares sem sair de casa</p>
          <div className={classes.allDiv}>
            {events.map((event) => HandleCreateCard(event))}
          </div>
          <p>Conheça novos lugares sem sair de casa</p>
          <div className={classes.allDiv}>
            {events.slice(0).reverse().map((event) => HandleCreateCard(event))}
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
