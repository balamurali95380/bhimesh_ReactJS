import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterDisplay() {
  const { count } = useContext(CounterContext);
  return <h2>Count: {count}</h2>;
}

export default CounterDisplay;
