import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter/Counter'
import User from './Usercrud/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter/>
      <hr />
      <h1>usercrud impl</h1>
      <User/>
    </>
  )
}

export default App
