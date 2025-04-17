import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Users from './Store/Users'

import Employees from './Store/Employees'
import Employee from './Store/Employee'
import Employee1 from './Store/Employee1'
import Employeecrud from './Store/Employeecrud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Employees/> */}
    {/* <Employee/> */}
    {/* <Employee1/> */}
    <Employeecrud/>

    {/* <Users/> */}
   
    </>
  )
}

export default App
