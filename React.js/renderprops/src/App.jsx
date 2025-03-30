import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincd from './Maincd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Maincd/>
    </>
  )
}

export default App
