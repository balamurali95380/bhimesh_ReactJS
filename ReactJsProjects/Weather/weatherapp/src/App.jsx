import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    const apiKey = 'cd21609a28a704b68a8e3366b82da711'; // Replace with your OpenWeatherMap key
    if (!city) {
      setError('Please enter a city name');
      setWeather(null);
      return;
    }

    try {
      const res = await fetch(
        `https://api.weatherstack.com/current?access_key=cd21609a28a704b68a8e3366b82da711&query=${cityName}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (err) {
      setError('Failed to fetch weather');
      setWeather(null);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>🌦️ Weather App</h2>
      <WeatherForm onSearch={fetchWeather} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;
