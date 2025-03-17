import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import ServerAPI from './ServerAPI'
import ServerAPI_axi from './ServerAPI-axi'
import Axios from './Axios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <ServerAPI_axi/> */}
      <Axios/>
    </>
  )
}

export default App
