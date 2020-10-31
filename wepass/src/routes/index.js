import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Login from "../pages/Login";
import Presentation from "../pages/Presentation";
import RegisterUser from "../pages/RegisterUser";
import Home from "../pages/Home";

const ROUTES = {
  PRESENTATION: "/",
  LOGIN: "/login",
  REGISTERUSER: "/registeruser",
  HOME: "/home",
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.PRESENTATION} exact component={Presentation} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTERUSER} component={RegisterUser} />
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
