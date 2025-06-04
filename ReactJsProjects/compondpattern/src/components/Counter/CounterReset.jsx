import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterReset() {
  const { reset } = useContext(CounterContext);
  return <button onClick={reset}>🔄 Reset</button>;
}

export default CounterReset;
