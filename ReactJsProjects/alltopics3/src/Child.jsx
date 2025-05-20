import React from 'react';
import './styles.css'; 

const Child = ({ theme }) => {
  const text = "this is from child"
  return (
    <div className={`child-box ${theme}`}>
      I am the Child with {theme} theme.
    </div>
  );
};

export default Child;
