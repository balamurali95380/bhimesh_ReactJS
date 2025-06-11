import React from 'react';
import Counter from './Counter';

function ClickCounter() {
  return (
    <Counter
      render={({ count, increment, decrement }) => (
        <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
          <h3>🖱️ Click Counter</h3>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      )}
    />
  );
}

export default ClickCounter;
