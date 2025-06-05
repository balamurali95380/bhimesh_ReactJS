import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCounter from './hooks/Usecounter';


function App() {
  const { count, increment, decrement, reset } = useCounter(0);



  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🧠 Custom Hook Counter</h2>
      <h3>Count: {count}</h3>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
    </>
  )
}

export default App
