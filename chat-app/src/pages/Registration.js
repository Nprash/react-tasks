import React from 'react';
import './Registration.scss';
import logo from '../images/imageicon.png'

const Registration = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>String Chat</span>
                <span className='title'>Register</span>
                
                <form>
                    <input type="text" placeholder='Display Name' name="" value="" />
                    <input type="email" placeholder='Email' name="" value="" />
                    <input type="password" placeholder='password' name="" value="" />
                    <label htmlFor="file">
                        <img src= {logo} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                    <input type="file" id="file" style={{display:"none"}} name="" value="" />
                    <button type="submit">Sign up</button>
                </form>
                <p>Do you have an account? login</p>
            </div>
        </div>
    )
}

export default Registration;
