import React from 'react';
import logo from '../images/prasanth.jpg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'> String Chat</span>
            <div className='user'>
                <img src={logo} alt="userimage" />
                <span>Prash</span>
                <button type="submit">Log out</button>
            </div>
        </div>
    )
}

export default Navbar
