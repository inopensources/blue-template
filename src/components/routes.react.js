import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signin from "./signin.react";
import Dashboard from "./dashboard.react";
import Menu from "./menu.react";

export default class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Signin}/>
            <Route path='/menu' component={Menu}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </BrowserRouter>
    )
  }
}
