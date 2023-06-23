// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/HomeSection/Home';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';


const App =() => {
  
  return (
    <Router>
     <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        </ul> 
     </nav>
     <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
     </Routes>
    </Router>
  )
}

export default App
