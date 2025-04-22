import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './user'
import First from './First'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/> */}
      <Student/>
    </>
  )
}

export default App
