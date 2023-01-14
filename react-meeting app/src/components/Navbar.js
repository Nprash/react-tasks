import React from 'react';
import { useState } from 'react';
import logo from "../img/icons8-meetings-64.png";
import { Link } from 'react-router-dom';
import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    function navtoggle(){
    setShowLinks(!showLinks);
    }


    return (
        <nav className='navbar1'>
            <div className='nav1'>
                <div className='logo-btn'>
                    <Link to='/' ><img src={logo} alt='logo' className='logo' /></Link>
                    <button className='hambtn' onClick={navtoggle}>  <MenuIcon color={"warning"}/></button>
                </div>
                <div className={`links ${showLinks? "showlinks":"hidelinks"}`}>  {/*links equal to ($..) if showLinks is true then it will add showlinks is a classname otherwise hidelinks*/}
                    <Link to='/' >All Meetings</Link>
                    <Link to='/My Meetings' >My Meetings</Link>
                    <Link to='/Addmeetings' >Add meetings</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
