import React from 'react';

const ChildButton = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>
      Click Me (Child Button)
    </button>
  );
};

export default ChildButton;
