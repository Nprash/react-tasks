import Home from './pages/Home';
import StudentList from './pages/StudentList';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/StudentList" className='link'>StudentList</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentList" element={<StudentList />} />
      </Routes>

    </div>
  );
}

export default App;
