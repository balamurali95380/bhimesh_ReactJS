import React from 'react';
import { memo } from "react";

const   Increment = ({ increment }) => {
console.log('Child Rendered');
    return (
    <button onClick={increment}>
        
     Increment
    </button>
  );
};

export default memo(Increment);