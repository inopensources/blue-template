import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }

                    {
                        user
                            ? <button onClick={signOut}>Sign out</button>
                            : <button onClick={signInWithGoogle}>Sign in with Google</button>
                    }
                </div>
            </div>)
    };
}

export default Login;
