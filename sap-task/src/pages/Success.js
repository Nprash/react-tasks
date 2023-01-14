import React from 'react'
import '../pages/Success.css';
import { Routes, Route, Link } from 'react-router-dom';
import AryaBhatta from '../components/AryaBhatta';

const Success = () => {
    return (
        <div>
            <div className='successmenu'>
                <Link to="/AryaBhatta" className='successlinks'>Arya Bhatta</Link>
                <Link to="/Success/Satyendranath Bose" className='successlinks'>Satyendranath Bose</Link>
                <Link to="/Success/CV Raman" className='successlinks'>CV Raman</Link>
                <Link to="/Success/Vikram sarabai" className='successlinks'>Vikram sarabai</Link>
                <Link to="/Success/Dr A.P.J Abdul Kalam" className='successlinks'>Dr A.P.J Abdul Kalam</Link>
            </div>

            <Routes>
                <Route path="/AryaBhatta" element={<AryaBhatta />} />
            </Routes>


        </div>
    )
}

export default Success;
