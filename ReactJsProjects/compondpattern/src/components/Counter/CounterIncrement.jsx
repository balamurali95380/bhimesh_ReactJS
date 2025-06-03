import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterIncrement() {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>➕ Increment</button>;
}

export default CounterIncrement;
