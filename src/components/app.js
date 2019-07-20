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
            <div className="container">
            <div className="row">
                <div className="col-lg-10">
            
            <table className="table table-striped">
            <thead>
                <tr>
                    <th className="small text-muted text-uppercase"><strong>#</strong>
                    </th>
                    <th className="small text-muted text-uppercase"><strong>First Name</strong>
                    </th>
                    <th className="small text-muted text-uppercase"><strong>Last Name</strong>
                    </th>
                    <th className="small text-muted text-uppercase"><strong>E-mail</strong>
                    </th>
                    <th className="small text-muted text-uppercase"><strong>Nick</strong>
                    </th>
                    <th className="small text-muted text-right text-uppercase"><strong>Role</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="v-a-m">1
                        </td><td className="v-a-m"><span className="text-gray-darker">Dino</span>
                        </td>
                        <td className="v-a-m">
                            <span className="text-gray-darker">Reichert</span>
                        </td>
                        <td className="v-a-m"> <span>Darron_Muller@hotmail.com</span>
                        </td>
                        <td className="v-a-m"> <span>Rudy_Morar86</span>
                        </td>
                        <td className="text-right v-a-m">
                            <span className="badge badge-outline badge-primary  text-uppercase"><span>Orchestrator</span></span>
                        </td>
                </tr>
                <tr>
                    <td className="v-a-m">2</td>
                    <td className="v-a-m"><span className="text-gray-darker">Irving</span>
                    </td>
                    <td className="v-a-m">
                        <span className="text-gray-darker">Goodwin</span>
                    </td>
                    <td className="v-a-m"> <span>Leatha_Kub@hotmail.com</span>
                    </td>
                    <td className="v-a-m"> <span>August_Hammes</span>
                    </td>
                    <td className="text-right v-a-m">
                        <span className="badge badge-outline badge-info text-uppercase"><span>Technician</span></span>
                    </td>
                </tr>
                <tr>
                    <td className="v-a-m">3
                    </td>
                    <td className="v-a-m"><span className="text-gray-darker">Cheyenne</span>
                    </td>
                    <td className="v-a-m">
                        <span className="text-gray-darker">Stanton</span>
                    </td>
                    <td className="v-a-m"> <span>Hassan69@gmail.com</span>
                    </td>
                    <td className="v-a-m"> <span>Justina.Barrows</span>
                    </td>
                    <td className="text-right v-a-m">
                        <span className="badge badge-outline badge-warning  text-uppercase"><span>Coordinator</span></span>
                    </td>
                </tr>
                <tr>
                    <td className="v-a-m">4
                    </td>
                    <td className="v-a-m"><span className="text-gray-darker">Emilia</span>
                    </td>
                    <td className="v-a-m">
                        <span className="text-gray-darker">Hyatt</span>
                    </td>
                    <td className="v-a-m"> <span>Santos.Goodwin@hotmail.com</span>
                    </td>
                    <td className="v-a-m"> <span>Robbie91</span>
                    </td>
                    <td className="text-right v-a-m">
                        <span className="badge badge-outline badge-soft-purple  text-uppercase"><span>Coordinator</span></span>
                    </td>
                </tr>
            </tbody>
        </table>
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
