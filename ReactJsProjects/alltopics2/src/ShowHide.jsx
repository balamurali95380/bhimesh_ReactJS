import React, { useState } from 'react';

const ShowHide = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(isVisible => !isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} paragraph
      </button>

      {isVisible && <p>Hello, World!</p>}
    </div>
  );
};

export default ShowHide;
