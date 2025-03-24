import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pnt from './Pnt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pnt/>
    </>
  )
}

export default App
