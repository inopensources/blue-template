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
