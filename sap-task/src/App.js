import React from 'react';
import logo from './img/logo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Success from './pages/Success';
import Failure from './pages/Failure';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <div>
          <Link to="/" className="links">Home</Link>
          <Link to="/Success" className="links">Success Stories</Link>
          <Link to="/Failure" className="links">Failure Stories</Link>
          <button type="text" className="btn">Buy a Story Book</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Failure" element={<Failure />} />
      </Routes>
    </div>

  );
}

export default App;
