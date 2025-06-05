import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import withCounter from './hoc/withCounter';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  const [count, setCount] = useState(0)

const EnhancedClick = withCounter(ClickCounter);
const EnhancedHover = withCounter(HoverCounter);

  return (
    <>
      <h2>Higher Order Component Example</h2>
      <EnhancedClick />
      <EnhancedHover />
    </>
  )
}

export default App
