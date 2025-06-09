// 30. useCallback for Function Caching
// useCallback prevents function recreation on every render, useful when passing callbacks to child components.
import { useState, useCallback } from 'react';

function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Cached function

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <Child onClick={memoizedClick} />
    </div>
  );
}
// The memoizedClick function does not get recreated on every render, improving efficiency
