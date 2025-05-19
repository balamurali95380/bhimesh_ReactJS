import React, { useState } from 'react';
import InputChild from './InputChild';
import DisplayChild from './DisplayChild';

const Container = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (value) => {
    setInputText(value);
  };

  return (
    <div>
      <h2>Sibling Communication via Parent</h2>
      <InputChild onInputChange={handleInputChange} />
      <DisplayChild text={inputText} />
    </div>
  );
};

export default Container;
