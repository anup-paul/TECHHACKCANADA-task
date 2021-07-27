import React, { useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';





if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        error: ''
    })


    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    // let history = useHistory();
    // let location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };


  console.log(firebase.auth);  
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                }

                setUser(signInUser);
                console.log(signInUser);
                // setLoggedInUser(signInUser);
                // history.replace(from);

            }).catch((error) => {
                setUser(error.message)
            });

    }

    return (
        <section className="d-flex justify-content-center" >
            <div className=" w-25 row mt-5 pt-5" >
                <div className="col" >
                    <div className="card text-center p-5 " >
                        <h4 className="mb-5" ><b>HLW NOMANDS</b></h4>
                        <button className="btn border rounded-pill " onClick={handleGoogleSignIn} >
                            
                            <b  >Sign In With google</b></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;