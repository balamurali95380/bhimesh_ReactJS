import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
       <h1 class="text-3xl font-bold underline bg-amber-600 text-green-900 ">
    Hello world!
  </h1>
  <p class="text-red-500">This text is red</p>
<p class="text-green-600">This text is green</p>
<p class="text-blue-700">This text is blue</p>
<p class="text-gray-400">This text is gray</p>
     
     
    </>
  )
}

export default App
