import React from 'react';

const InputChild = ({ onInputChange }) => {
  return (
    <input
      type="text"
      placeholder="Type something..."
      onChange={(e) => onInputChange(e.target.value)}
    />
  );
};

export default InputChild;
