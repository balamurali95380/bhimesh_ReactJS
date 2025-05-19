import React from 'react';
import Child from './Child';

const Parnt = ({ theme }) => {
  return (
    <div>
      <h3>Parent Component</h3>
      <Child theme={theme} />
    </div>
  );
};

export default Parnt;
