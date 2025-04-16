import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Employee from './Components/Employee'
import Student from './Components/Student'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Employee/>
     <Student/>
     <User/>
    </>
  )
}

export default App
