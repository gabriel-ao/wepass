import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 300,
    width: 240,
    color: "#474747",
    background: "#fff",
    boxShadow: "2px 2px 5px #000",
    margin: 20,
    borderRadius: 5,
    fontSize: 18,
    padding: 20,
  },

  title: {},

  text: {},
}));

export function Card(props) {
  const classes = useStyles();
  return <div className={classes.card}> {props.children} </div>;
}

export function CardTitle(props) {
  const classes = useStyles();
  return <div className={classes.title}> {props.children}</div>;
}

export function CardText(props) {
  const classes = useStyles();
  return <p className={classes.text}> {props.children}</p>;
}
