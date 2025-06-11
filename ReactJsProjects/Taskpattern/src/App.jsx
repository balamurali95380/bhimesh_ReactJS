import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tabs, TabList, Tab, TabPanels } from './components/Tabs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Tabs>
      <TabList>
        <Tab index={0}>Home</Tab>
        <Tab index={1}>Profile</Tab>
        <Tab index={2}>Settings</Tab>
      </TabList>

      <TabPanels>
        <div>Welcome to the Home page!</div>
        <div>This is your Profile.</div>
        <div>Here you can change Settings.</div>
      </TabPanels>
    </Tabs>
  );
}

export default App
