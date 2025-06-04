import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContainer from './containers/UserContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Container vs Presentational Example</h2>
      <UserContainer />
    </>
  )
}

export default App
