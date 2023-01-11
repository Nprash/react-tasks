import React from 'react'
import logo from '../images/prasanth.jpg'
import './CompStyle.scss';

const Search = () => {
    return (
        <div className='search'>
            <div className='searchform'>
                <input type="text" placeholder='Search User' name="" value="" />
            </div>
            {/* <hr/> */}
            <div className='userchat'>
                <img src={logo} alt="" />
                <div className='userchatinfo'>
                    <span>Nimmana Prasanth</span>
                </div>
            </div>
            
        </div>
    )
}

export default Search;
