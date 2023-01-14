import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import NotFound from './pages/Notfound';
import Addmeetings from './pages/Addmeetings';
import './App.css';
import MyMeetings from './pages/MyMeetings';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/My Meetings' element={<MyMeetings />} />
        <Route path= '/Addmeetings' element={<Addmeetings />} />
        <Route path= '*' element={<NotFound />} />
      </Routes>
    </div>

  );

}

export default App;
