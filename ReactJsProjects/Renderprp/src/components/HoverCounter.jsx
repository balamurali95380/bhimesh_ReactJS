import React from 'react';
import Counter from './Counter';

function HoverCounter() {
  return (
    <Counter
       render={({ count, increment, decrement }) => (
        
        <>
          <h3>🖱️ Hover Counter</h3>
          <p>Hover Count: {count}</p>
          <small>(Hover to increase count)</small>
          <p>Count: {count}</p>
          <button onMouseOver={increment}>Increment</button>
        
        </>
      )}
    />
  );
}

export default HoverCounter;
