import React, {Suspense, lazy, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Login = lazy(() => import('./dashboard.react'));

class Signin extends Component {
  render() {
    return (
        <div>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <div class="panel panel-default b-a-0 shadow-box">
                <div class="panel-body">
                  <h3 class="text-center m-b-0">Register</h3>
                  <p class="text-center m-b-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <form>
                    <div class="form-group">
                      <label>Username</label>
                      <input class="form-control" placeholder="Enter a Username..."/>
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input class="form-control" placeholder="Enter a Password..."/>
                    </div>
                    <div class="form-group">
                      <label>Repeat Password</label>
                      <input class="form-control" placeholder="Repeat Password..."/>
                    </div>
                    <div class="form-group">
                      <label>Email</label>
                      <input class="form-control" placeholder="Enter a Email..."/>
                    </div>
                    <a href="../index.html" role="button" class="btn m-b-2 btn-block btn-primary">Register</a>
                  </form>
                </div>
                <div class="panel-footer b-a-0 b-r-a-0">
                  <Route exact path="/dashboard" component={Login}/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Signin;
