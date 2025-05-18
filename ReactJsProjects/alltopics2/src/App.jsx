import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Profile from './Profile'
import ClickCounter from './Clickcounter'
import Form from './Form'
import Clock from './Clock'
import ShowHide from './ShowHide'
import Avatar from './Avatar'
import ColorChanger from './ColorChanger'
import TodoList from './TodoList'

function App() {
   const todos = [
    'Buy groceries',
    'Walk the dog',
    'Finish React project',
    'Read a book',
  ];  
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
  
      <Profile username="bhim123" />
      <ClickCounter/>
      <Form/>
      <Clock/>
      <ShowHide/>
       <Avatar imageUrl="https://randomuser.me/api/portraits/men/1.jpg" />

      <h2>With Default Image:</h2>
      <Avatar />
      <ColorChanger/>
     
     
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    
    </>
  )
}

export default App
