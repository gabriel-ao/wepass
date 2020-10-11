import React, { Component } from "react";
import { makeStyles, Paper, Typography, Grid } from '@material-ui/core';

// import logo from '../logo.svg';
// import logo from '../assets/wepass_final_fundo_branco_logo_roxo.png';
import logo from '../assets/500x500jpeg';


import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'white',
    color: 'purple'
  }
}))


function Presentation() {

  const classes = useStyles();

  
  let history = useHistory()

  function Logar(){
    history.push(`/login`)
  }

  return (
    <body>
      <div className={classes.container}>
      <img src={logo} className="App-logo" alt="logo" /> 
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src='./assets/wepass_final_fundo_branco_logo_roxo.png' /> */}
        <p>
          O WePass é um software com foco em aplicar estudos na prática!
        </p>

        <button onClick={() => Logar()}> Login </button>
      </div>
    </body>
  );
}



export default Presentation;