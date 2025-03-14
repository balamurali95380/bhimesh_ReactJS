import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ecartmanagement from './Miniprojects/Ecartmanagement'
// import Socialmedia from './Miniprojects/socialmedia'
import Taskms from './Miniprojects/Taskms'
import Quizms from './Miniprojects/OnlinQuz'
import OnlinQuz from './Miniprojects/OnlinQuz'
import Mtbs from './Miniprojects/Mtbs'
import Upm from './Miniprojects/Upm'
import Lms from './Miniprojects/Lms'
import Invms from './Miniprojects/Invms'
import Extrckr from './Miniprojects/Extrckr'
import Dab from './Miniprojects/Dab'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Ecartmanagement/> */}
     {/* <Socialmedia/> */}
     {/* <Taskms/> */}
     <OnlinQuz/>
     {/* <Mtbs/> */}
     {/* <Upm/> */}
     {/* <Lms/> */}
     {/* <Invms/> */}
     {/* <Extrckr/> */}
     {/* <Dab/> */}
    </>
  )
}

export default App
