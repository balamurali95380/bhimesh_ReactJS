import React from 'react';
import Counter from './components/Counter/Counter';
import CounterDisplay from './components/Counter/CounterDisplay';
import CounterIncrement from './components/Counter/CounterIncrement';
import CounterDecrement from './components/Counter/CounterDecrement';
import CounterReset from './components/Counter/CounterReset';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🧠 Compound Counter</h1>

      <Counter>
        <CounterDisplay />
        <div style={{ margin: '10px' }}>
          <CounterIncrement />{" "}
          <CounterDecrement />{" "}
          <CounterReset />
        </div>
      </Counter>
    </div>
  );
}

export default App;
