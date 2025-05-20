import React from 'react';

const InputNumber = ({ value, onNumberChange }) => {
    console.log("rendering")
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => onNumberChange(Number(e.target.value))}
      placeholder="Enter a number"
    />
  );
};

export default InputNumber;
