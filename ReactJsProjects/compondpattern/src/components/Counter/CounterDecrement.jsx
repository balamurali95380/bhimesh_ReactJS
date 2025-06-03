import React, { useContext } from 'react';
import CounterContext from './CounterContext';

function CounterDecrement() {
  const { decrement } = useContext(CounterContext);
  return <button onClick={decrement}>➖ Decrement</button>;
}

export default CounterDecrement;
