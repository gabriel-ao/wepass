import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
// logo
import logo_wepass from "../assets/wepass_final_fundo branco.png";
import Carregamento from "../components/Carregamento";
import studynng from "../assets/ilustrations/studying/Programming-amico.svg";

// import Button from "../components/button/index";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  div1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    // backgroundColor: "green",
  },
  div2: {
    gridArea: "1 / 2 / 2 / 3",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
  },
  div3: { display: "flex", justifyContent: "center" },

  studying: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
}));

function Presentation() {
  const classes = useStyles();
  let history = useHistory();

  function handleClickLogin() {
    // <Carregamento />;

    history.push(`/login`);
  }
  return (
    <Container maxWidth="sm-12" className={classes.container}>
      <Grid item xs={3} className={classes.div2}></Grid>

      <Grid item xs={6}>
        <Grid item xs={12} className={classes.div1}>
          <img height="300" width="400" src={logo_wepass} />
        </Grid>

        <Grid item xs={12} className={classes.div3}>
          <p>O WePass é um software com foco em aplicar estudos na prática!</p>
        </Grid>

        <Grid item xs={12} className={classes.div3}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickLogin()}
          >
            logar
          </Button>
        </Grid>

        {/* <Grid item xs={12} className={classes.studying}>
          <img width="400" height="400" src={studynng} />
        </Grid> */}

        {/* style={{ backgroundColor: "black", height: "100vh" }} */}
      </Grid>

      <Grid item xs={3} className={classes.div2}></Grid>
    </Container>
  );
}

export default Presentation;

{
  /* <a href="https://stories.freepik.com/web">
    Illustration by Freepik Stories
  </a> */
}
