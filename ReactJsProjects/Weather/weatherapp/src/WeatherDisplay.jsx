import React from 'react';

const WeatherDisplay = ({ weather }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>{weather.name}, {weather.sys.country}</h3>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;
