import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../../router/src/Home'
import Travel from './Travel'
import Medicals from './Medicals'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
     <h1> Header</h1>
     <nav>
      <Link to ="">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/medicals">Medical</Link>
      <Link to ="/travel">Travel</Link>
     </nav>
     <Routes>  
      <Route path="" element={<Home/>}/>       
      <Route path="/about" element={<About/>}/>
      <Route path="/medicals" element={<Medicals/>}/>
      <Route path="/travel" element={<Travel/>}/>

     </Routes>
     <h1> Footer</h1>
    </Router>
  )
}

export default App
