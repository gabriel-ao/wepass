import React, { Component, useState } from "react";
import Input from "../components/input/index.js";
import Button from "../components/button/index.js";

import { useHistory } from "react-router-dom";

import api from "../services/api";
import { setRef } from "@material-ui/core";

export default function RegisterUser() {
  //States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [myForm, setMyForm] = useState({
    firstName: "",
    lastName: "",
    roles: "",
    email: "",
    password: "",
  });

  async function handleRegister() {
    const data = {
      firstName,
      lastName,
      roles,
      email,
      password,
    };

    try {
      await api.post("/user", data);
      alert("Cadastrado com sucesso");
      history.push(`/login`);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div className="container">
      <p>cadastro de usuario</p>

      <Input
        placeholder="Primeiro Nome"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input
        placeholder="Segundo Nome"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <Input
        placeholder="Roles"
        value={roles}
        onChange={(event) => setRoles(event.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="senha"
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button onClick={() => handleRegister()}> Cadastre se </Button>
    </div>
  );
}
