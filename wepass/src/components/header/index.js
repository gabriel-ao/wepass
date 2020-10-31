import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../button/index.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  buttonLogin: {
    display: "flex",
    justifyContent: "flex-end",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ children = "clique aqui", onClick }) {
  const classes = useStyles();

  let history = useHistory();
  function Logar() {
    history.push(`/login`);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button
            className={classes.buttonLogin}
            color="inherit"
            onClick={() => Logar()}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

{
  /* <Button
className={classes.buttonLogin}
color="inherit"
onClick={() => Logar()}
>
Login
</Button> */
}
