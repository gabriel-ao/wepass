import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import Button from "../button/index.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import EventNoteIcon from "@material-ui/icons/EventNote";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";

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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },

  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Header({ children = "clique aqui", onClick }) {
  const classes = useStyles();

  // logica menu lateral inicio
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <HomeIcon /> : <CloseIcon />}
            </ListItemIcon>

            <ListItemText primary={text} onClick={() => handleClickHome()} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Perfil"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <PersonIcon /> : <CloseIcon />}
            </ListItemIcon>

            <ListItemText primary={text} onClick={() => handleClickProfile()} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Eventos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <EventNoteIcon /> : <CloseIcon />}
            </ListItemIcon>
            <ListItemText primary={text} onClick={() => handleClickEvents()} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  // fim logica menu lateral

  let history = useHistory();
  function handleClickProfile() {
    history.push(`/profile`);
  }
  function handleClickEvents() {
    history.push(`/events`);
  }
  function handleClickHome() {
    history.push(`/home`);
  }
  function handleLogout() {
    localStorage.removeItem("token");
    alert("Desconectado");
    history.push("/login");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} />
                {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </IconButton>

          <Button variant="contained" onClick={() => handleLogout()}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
