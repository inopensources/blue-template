import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Login</h1>
                <div>
                    {
                        this.props.user
                            ? <p>Hello, {this.props.user.displayName}</p>
                            : <p>Please sign in.</p>
                    }

                    {
                        this.props.user
                            ? <button onClick={() => this.props.signOut()}>Sign out</button>
                            : <button onClick={() => this.props.signIn()}>Sign in with Google</button>
                    }
                </div>
            </div>
            
            )
    };
}

export default Login;
var config = {
        apiKey: "AIzaSyCrH6D9SX_Jvn723Ce_4hXKe0BjmvrtC7Q",
        authDomain: "blue-template-247300.firebaseapp.com",
        databaseURL: "https://blue-template-247300.firebaseio.com",
        projectId: "blue-template-247300",
        storageBucket: "",
        messagingSenderId: "357730226695",
        appId: "1:357730226695:web:a9a28732de7ee660"
    };


firebase.initializeApp(config);

var signUpBtn = document.getElementById('signUpBtn');
var signInBtn = document.getElementById('signInBtn');

signInBtn.addEventListener('click',function(){
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(emailField, passwordField).catch(function(error){
        if(error != null){
            console.log(error.message);
            return;
        }
        alert('User Created !!')
    })
}); 

signInBtn.addEventListener('click', function(){

    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value;
});