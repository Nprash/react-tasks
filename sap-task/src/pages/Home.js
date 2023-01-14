import React from 'react'
import success from '../img/success.png'
import '../pages/Home.css';
import '../App';
import App from '../App';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <App />
            <section className='section'>
                <Outlet />
            </section>
            <div className='home'>
                <h4>Happy Reading</h4>
                <div className='img-text'>
                    <p>Reading is typically an individual activity, done silently, although on occasion a person reads out loud for other listeners; or reads aloud for one's own use, for better comprehension. Before the reintroduction of separated text (spaces between words) in the late Middle Ages, the ability to read silently was considered rather remarkable.</p>
                    <img src={success} alt="image" className='main-img' />
                </div>
            </div>
        </>
    )
}

export default Home
