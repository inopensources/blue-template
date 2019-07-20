import React from 'react';

const signin = (props) => (

    <div>
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <div class="panel panel-default b-a-0 shadow-box">
            <div class="panel-heading text-center">
              <a href="../index.html"> <img src="../assets/images/spin-logo-inverted-@2X.png" alt="Logo" class="m-t-3 m-b-3 h-20"/></a>
            </div>
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
              <a href="../pages/forgot-password.html">Forgot Password?</a>
              <a href="../pages/login.html" class="pull-right">Login</a>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <input type="text" placeholder="Email: " class="form-control" id="email"></input>
        <input type="password" placeholder="Senha: " class="form-control" id="password"></input>
        <button id="signUpBtn">Sign Up</button>
        <button id="signInBtn">Sign In</button>
      </div>
    </div>

);

signin.propTypes = {};

export default signin;
