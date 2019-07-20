import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
            <div>
                <button className="btn btn-primary" type="button">aaa</button>
                <div className="col-lg-3 col-md-6 col-sm-6">
    <div className="panel panel-default b-a-0 shadow-box">
        <div className="panel-heading">Main Fundings</div>
            <div className="panel-body">
                <h2 className="m-t-0 f-w-300"><sup>$</sup>
                    <span> 901.00</span>
                </h2>
                <i className="fa fa-fw fa-caret-up text-success"></i> <span>$ 137.00</span>
            </div>
        </div>
    </div>
    </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);
