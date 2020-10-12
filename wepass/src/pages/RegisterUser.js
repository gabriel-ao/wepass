import React, { Component } from "react";

import { useHistory } from "react-router-dom";

export default function RegisterUser() {
  let history = useHistory();
  function Cadastrar() {
    history.push(`/login`);
  }

  return (
    <div className="container">
      <p>cadastro de usuario</p>
    </div>
  );
}
