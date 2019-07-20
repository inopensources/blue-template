import React, { Component } from "react";
import './signin.css';

class Signin extends Component {
  render() {
    return (
      <div className="content">
        <div class="main-wrap">
          <div class="container-fluid">
            <div class="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default b-a-0 shadow-box">
                  <div className="panel-body">
                    <h3 className="text-center m-b-0"> Login</h3>
                    <p className="text-center m-b-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form className="m-t-3">
                      <div className="form-group">
                        <input className="form-control" placeholder="Enter a Username or Email..."/>
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Your Password..."/>
                      </div>
                      <a href="/dashboard" role="button" className="btn btn-block m-b-2 btn-primary">Login</a>
                    </form>
                  </div>
                </div>
                <p className="text-gray-light text-center"><strong>SPIN Dashboard </strong> <span className="text-gray-light">© 2009 - 2016. Made by <i className="fa fa-fw fa-heart text-danger"></i> New York, US</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
