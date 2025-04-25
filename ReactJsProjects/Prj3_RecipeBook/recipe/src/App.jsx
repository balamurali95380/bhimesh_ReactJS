import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipesComponent from './feautures/recipes/RecipesComponent'
import './styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecipesComponent/>
    </>
  )
}

export default App
