import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signin from "./signin.react";
import Dashboard from "./dashboard.react";
import Menu from "./menu.react";

class Routes extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Signin}/>
              <Route path='/menu' component={Menu}/>
              <Route path='/dashboard' component={Dashboard}/>
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}

export default Routes;
