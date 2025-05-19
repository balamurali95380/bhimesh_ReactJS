import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'
import TodoApp from './TodoApp'
import { UserContext } from './UserContext'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com'
  };

  return (
    <>
    <Dashboard/>
    <TodoApp/>
     <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to the App</h1>
        <Profile />
      </div>
    </UserContext.Provider>
    </>
  )
}

export default App
