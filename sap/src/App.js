import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>welcome to SPA - Single page Application</h1> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;