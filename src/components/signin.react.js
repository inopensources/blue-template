import React from 'react';

const signin = (props) => (
	<div>
	  <body>
		  <div>
			  <div class="form-group">
					<input type="text" placeholder="Email: " class="form-control" id="email"></input>
					<input type="password" placeholder="Senha: " class="form-control" id="password"></input>
					<button id="signUpBtn">Sign Up</button>
					<button id="signInBtn">Sign In</button>
			  </div>
		  </div>
	  </body>
	</div>
);

signin.propTypes = {};

export default signin;