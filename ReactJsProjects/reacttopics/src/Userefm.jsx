// useRef for Storing Mutable Values
// useRef is not just for DOM manipulation—it can store mutable values that persist across renders without causing a component to re-render.
import { useRef, useEffect, useState } from 'react';

function MutableValue() {
  const countRef = useRef(0); // Store mutable value
  const [count, setCount] = useState(0);

  useEffect(() => {
    countRef.current = count; // Update reference value without re-rendering
  });

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {countRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
// Here, countRef.current keeps track of the previous count, but does not trigger a component re-render when updated.
