import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dark from './Dark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dark/>
    </>
  )
}

export default App
