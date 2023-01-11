import React from 'react'



const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>String Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type="email" placeholder='Email' name="" value="" />
                    <input type="password" placeholder='password' name="" value="" />
                    <button type="submit">Sign in</button>
                </form>
                <p>Don't you have an account? Register</p>
            </div>
        </div>
    )
}

export default Login
