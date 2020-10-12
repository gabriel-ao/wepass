import React, { Component } from "react";

import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  function Cadastrar() {
    history.push(`/registeruser`);
  }

  return (
    <div>
      <div className="container">
        <form className="mainLogin">
          <p className="Titulo">
            <a>Logue com seu E-mail</a>
          </p>
          <input className="Caixa" />
        </form>

        <button className="btn White">
          <a>logar</a>
        </button>
      </div>
      <div>
        <p> Se não possui cadastro!</p>
        <button onClick={() => Cadastrar()}> Clique aqui</button>
      </div>
    </div>
  );
}

export default Login;
