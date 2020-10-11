import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
  } from "react-router-dom";

import Login from '../pages/Login'
import Presentation from '../pages/Presentation'

const ROUTES = {
    PRESENTATION: '/',
    LOGIN: '/login',
  };

export default function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path={ROUTES.PRESENTATION} exact component={Presentation} />
            <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
    </BrowserRouter>
    )
}