import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Coun from './Coun'
import Click from './Click'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Coun/>
      <hr />
      <Click/>
    </>
  )
}

export default App
