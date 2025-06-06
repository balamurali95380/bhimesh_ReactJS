import React from 'react';

function ClickCounter({ count, increment }) {
  return (
    <div>
      <button onClick={increment}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default ClickCounter;
