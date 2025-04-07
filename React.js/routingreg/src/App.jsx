import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Registartion from './Registration'
import Login from './Login'
import Dashboard from './Dashboard'
import Userdetails from './Userdetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Registartion/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>          
          <Route path='userdetails' element={<Userdetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
