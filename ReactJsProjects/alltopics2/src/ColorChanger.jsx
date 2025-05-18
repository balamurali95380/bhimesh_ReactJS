import React, { useState } from 'react';

const ColorChanger = () => {

  const [bgColor, setBgColor] = useState('#ffffff');


  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  
  const handleChangeColor = () => {
    setBgColor(getRandomColor());
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: bgColor,
          width: '200px',
          height: '200px',
          marginBottom: '10px',
          border: '1px solid #000'
        }}
      ></div>
      <button onClick={handleChangeColor}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
