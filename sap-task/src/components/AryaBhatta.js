import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import aryabhatta from '../img/aryabhatta.jpg';
import '../components/arya.css'

const AryaBhatta = () => {
    return (
        <main>
            <div className='arya'>
                <h3>Biography</h3><hr/>
                <img src={aryabhatta} className="aryaimage" alt="image1" />
                <Outlet/>
            </div>
        </main>
    )
}

export default AryaBhatta;
