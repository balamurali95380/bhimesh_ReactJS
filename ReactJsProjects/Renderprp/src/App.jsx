import React from 'react';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>🔁 Render Props Pattern Demo</h2>
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
