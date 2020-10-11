
import React, { Component } from "react";

function Login() {
  return (
    <body>
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
    </body>
  );
}

export default Login;