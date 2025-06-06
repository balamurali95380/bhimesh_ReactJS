import React from 'react';

function HoverCounter({ count, increment }) {
  return (
    <div onMouseOver={increment}>
      Hovered {count} times
    </div>
  );
}

export default HoverCounter;
