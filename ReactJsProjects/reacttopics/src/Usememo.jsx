// 29. useMemo for Expensive Calculations
// useMemo helps optimize performance by caching expensive computations and recomputing only when dependencies change.
import { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const factorial = useMemo(() => {
    console.log('Calculating Factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]); // Recalculates only when number changes

  return (
    <div>
      <p>Factorial of {number}: {factorial}</p>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <p>Counter: {count}</p>
    </div>
  );
}
// Here, the factorial calculation runs only when number changes, instead of on every render.
