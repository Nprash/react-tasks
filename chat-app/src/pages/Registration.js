import React from 'react';
import './Registration.scss';
import logo from '../images/imageicon.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

const Registration = () => {

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target[0].value)
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>String Chat</span>
                <span className='title'>Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Display Name' />
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='password' />
                    <label htmlFor="file">
                        <img src={logo} alt="imagelogo" />
                        <span>Add an Avatar</span>
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                    <button type="submit">Sign up</button>
                </form>
                <p>Do you have an account? login</p>
            </div>
        </div>
    )
}

export default Registration;
