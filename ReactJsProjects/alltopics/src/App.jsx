import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import User from './User'
import Welcome from './Welcome'
import Counter from './Counter'
import Greeting from './Greeting'
import Timer from './Timer'
import Usercard from './UserCard'
import UserCard from './UserCard'
import Toggle from './Toggle'
import InputField from './InputField'
import LoginStatus from './LoginStatus'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User/>
      <Welcome/>
      {/* <Counter/> */}
      <Greeting/>
      <Timer/>
      <UserCard name="Alice" role="Admin" />
      <UserCard name="Bob" />
      <Toggle/>
      <InputField/>
      <LoginStatus/>
    </>
  )
}

export default App
