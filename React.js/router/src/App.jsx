import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [count, setCount] = useState(0)

    
     return (
    <Router>
       <h1>header</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      

      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     
      </Routes>
      <h1>footer</h1>
    </Router>

      
     
    
     )
}

export default App
