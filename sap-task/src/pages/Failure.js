import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import '../pages/Failure.css';
const Failure = () => {
    return (
        <div className='failuremenu'>
            <Link to="/Failure/Thomas Alva Edison" className='failurelinks'>Thomas Alva Edison</Link>
            <Link to="/Failure/J.K. Rowling" className='failurelinks'>J.K. Rowling</Link>
            <Link to="/Failure/Albert Einstein" className='failurelinks'>Albert Einstein</Link>
            <Link to="/Failure/Abraham Lincoln" className='failurelinks'>Abraham Lincoln</Link>
            <Link to="/Failure/Nelson Mandela" className='failurelinks'>Nelson Mandela</Link>
        </div>
    )
}

export default Failure;
