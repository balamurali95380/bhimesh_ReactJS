import React, { useState } from 'react';

function Counter({ render }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return render({ count, increment, decrement });
}

export default Counter;
