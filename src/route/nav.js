import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './nav.css'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Login from "../pages/Login";

const NavRoute = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const checkLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log("user ", user)
                navigate('/JobQueue')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode == "auth/invalid-email") {
                   navigate('/login')
                }
            });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navcolor">
            <a className="navbar-brand" href="/">F-Over</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">หน้าแรก</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/gallary">gallary</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/dataDisplay">คิวงาน</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" onClick={() => checkLogin()}>ลงคิวงาน</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};
export default NavRoute;