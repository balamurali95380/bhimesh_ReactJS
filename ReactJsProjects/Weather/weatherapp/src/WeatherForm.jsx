import React, { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Search
      </button>
    </form>
  );
};

export default WeatherForm;
