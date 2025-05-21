import React from 'react';

const ChildButton = ({ onButtonClick }) => {
 console.log("child render")
    return (
    <button onClick={onButtonClick}>
        
      Click Me (Child Button)
    </button>
  );
};

export default ChildButton;
