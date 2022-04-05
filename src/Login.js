import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {auth} from "./firebase";
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate("/");
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if (auth) {
                navigate("/");
            }
        })
        .catch(error => alert(error.message))

        //Firebase register stuff
    }

  return (
    <div className = "login">
        <Link to = "/">
            <img 
                className = "login__logo" 
                src = "https://www.thehoth.com/wp-content/uploads/2018/06/4a.png"
            />
        </Link>
        <div className = "login__container">
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type = "text" value={email} onChange = {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type = "password" value={password} onChange = {e => setPassword(e.target.value)} />

                <button type = "submit" className = "login__signInButton" onClick={signIn} >
                    Sign In
                </button>
            </form>
            <button className = "login__registerButton" onClick={register}>
                Create an Account
            </button>
        </div>
    </div>
  )
}

export default Login