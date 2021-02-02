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
    maxWidth: 160,
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
      maxWidth: 226,
      height: 210,
      margin: 10,
      padding: 5,


    },

    [theme.breakpoints.up("lg")]: {
      maxWidth: 266,
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
    opacity: "0.3",
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

  messagePage: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    alignItems: "center",
    fontSize: 18,
    
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,

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

  function handleFormatDate(data){
    // 2021-01-25T03:56:00.000Z  formatado dessa forma
    var year  = data.split("-")[0];
    var month  = data.split("-")[1];
    var day  = data.split("-")[1];



    return day + " / " + month + " / " + year
  }

  function HandleCreateCard(data) {
    const formatDate = handleFormatDate(data.dataEvent)
    return (
      <Card key={data.id} className={classes.cards}>
        <CardContent >
          <Title>{data.title}</Title>
          <DateCard>{formatDate}</DateCard>
          <TextCard>{data.describe}</TextCard>
        </CardContent>
        <ConfigurationButtons>
          <Button
            variant="contained"
            color="primary"
            id={data.id}
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
            <Fade id={data.id}  in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
                <Title>{data.title}</Title>
                <DateCard>{data.dataEvent}</DateCard>
                <TextCard>{data.describe}</TextCard>
                
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

  console.log(events)
  let categorias = ''

  return (
    <>
      <Header />

      <Container  className={classes.container}>
        <Grid item xs={12}>
          
          <p className={classes.messagePage}>
            {events  != 0 ? "": "Infelizmente ainda não temos eventos" }
          </p>

          <div>
            {
              categorias = events.filter((event) => event.category === 'Evento Online'),
              categorias != 0 ? "Evento Online"  : " "
            }
            <div className={classes.allDiv}>
              {
                events
                .filter((event) => event.category === 'Evento Online')
                .map((event) => HandleCreateCard(event)).reverse()
              }
            </div>
          </div>


          <div>
            {
              categorias = events.filter((event) => event.category === 'Gastronomia'),
              categorias != 0 ? "Gastronomia"  : " "
            }
            <div className={classes.allDiv}>
              {
                events
                .filter((event) => event.category === 'Gastronomia')
                .map((event) => HandleCreateCard(event)).reverse()
              }
            </div>
          </div>

          <div>
            {
              categorias = events.filter((event) => event.category === 'Festas e shows'),
              categorias != 0 ? "Festas e shows"  : " "
            }
            <div className={classes.allDiv}>
              {
                events
                .filter((event) => event.category === 'Festas e shows')
                .map((event) => HandleCreateCard(event)).reverse()
              }
            </div>
          </div>

          <div>
            {
              categorias = events.filter((event) => event.category === 'free'),
              categorias != 0 ? "Eventos gratuitos "  : " "
            }

            <div className={classes.allDiv}>
              {
                events
                  .filter((event) => event.category === 'free')
                  .map((event) => HandleCreateCard(event)).reverse()
              }
            </div>
          </div>

          <div>
            {
              categorias = events.filter((event) => event.category === 'Outros'),
              categorias != 0 ? "Outros Eventos"  : " "
            }
            <div className={classes.allDiv}>
              {
                events
                .filter((event) => event.category === 'Outros')
                .map((event) => HandleCreateCard(event)).reverse()
              }
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
