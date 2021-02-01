import React from "react";
import Routes from "./routes/index";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
    color: "#6967da",
  },

  
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Routes />
    </div>
  );
}

export default App;
