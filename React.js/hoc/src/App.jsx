import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hoc1 from './Hoc1'
import Chdc1 from './Chdc1'
import Chdc2 from './Chdc2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
    <Chdc1/>
    <hr />
    <Chdc2/>
    </>
  )
}

export default App
