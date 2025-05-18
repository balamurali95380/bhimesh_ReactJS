import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(Count => Count + 1);
  };

  return (
    <div>
      <p> clicked {count} times.</p>
      <button onClick={handleClick}>Click HERE</button>
    </div>
  );
};

export default ClickCounter;
