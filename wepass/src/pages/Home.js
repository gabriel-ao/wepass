import React, { Component, useState, useEffect } from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import api from "../services/api";

import Input from "../components/input/index.js";
import Button from "../components/button/index.js";

const useStyles = makeStyles(() => ({}));

function Login() {
  let history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    alert("Desconectado");
    history.push("/login");
  }

  async function getData() {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/user", {
        headers: { "x-access-token": token },
      });
      document.title = response.data.firstName;

      alert(`ola ${response.data.firstName}`);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      hello gabigol
      <Button onClick={() => handleLogout()}> Logout </Button>
    </div>
  );
}

export default Login;
