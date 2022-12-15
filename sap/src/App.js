import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Services from './pages/Services';
import Contact from './pages/Contact';
import "./App.css";


function App() {
  return (
    <>
      <div className="App">
      <h1>welcome to SPA - Single page Application</h1>

        <nav className="navbar">
          {/* <Link to = "/" className="link"><h3>Prasanth</h3></Link> */}
          <h3>Prasanth</h3>
          <div className="nav-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/About" className="link">About</Link>
            <Link to="/Services" className="link">Services</Link>
            <Link to="/Contact" className="link">Contact us</Link>
            <Link to="*" className="btn">Newsletter</Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App; 