import React from 'react';
import './styles.css'; 

const Child = ({ theme }) => {
  return (
    <div className={`child-box ${theme}`}>
      I am the Child with {theme} theme.
    </div>
  );
};

export default Child;
