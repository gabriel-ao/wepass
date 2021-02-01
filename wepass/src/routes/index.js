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
import RegisterEvent from "../pages/RegisterEvent";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Events from "../pages/Events";
import Tickets from "../pages/Tickets";

const ROUTES = {
  PRESENTATION: "/",
  LOGIN: "/login",
  REGISTERUSER: "/registerUser",
  REGISTEREVENT: "/registerEvent",
  HOME: "/home",
  PROFILE: "/profile",
  EVENTS: "/events",
  TICKETS: "/tickets",
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.PRESENTATION} exact component={Presentation} />
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.REGISTERUSER} component={RegisterUser} />
        <Route path={ROUTES.REGISTEREVENT} component={RegisterEvent} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.PROFILE} component={Profile} />
        <Route path={ROUTES.EVENTS} component={Events} />
        <Route path={ROUTES.TICKETS} component={Tickets} />
        
      </Switch>
    </BrowserRouter>
  );
}
