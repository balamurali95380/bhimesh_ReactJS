import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrappedprops from './Wrappedprops'
import Dataload from './Dataload'
import Userauth from './Userauth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dataload/>
    {/* <Wrappedprops/>     */}
    {/* <Userauth/> */}

     
    </>
  )
}

export default App
