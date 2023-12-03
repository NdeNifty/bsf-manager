import React, { useState, useEffect } from 'react';


const CurrentWeather = ({ location: propLocation }) => {
  const [location, setLocation] = useState(propLocation || '');

  useEffect(() => {
    fetch('http://localhost:3000/api/get-settings')
      .then(response => response.json())
      .then(data => {
        setLocation(data.location);
        // You can also set other settings if needed
      });
  }, []);

  const [weather, setWeather] = useState({
    temperature: null,
    humidity: null
  });

  useEffect(() => {
    if (location) {
      const API_KEY = '42c9336b75eb857b70115f879df245d7'; // Replace with your OpenWeatherMap API key
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setWeather({
            temperature: data.main.temp,
            humidity: data.main.humidity
          });
        })
        .catch(error => console.error('Error fetching weather data:', error));
    }
  }, [location]);

  return (
    <div>
      {weather.temperature && <p>Temperature: {weather.temperature} °C</p>}
      {weather.humidity && <p>Humidity: {weather.humidity} %</p>}
    </div>
  );
};

export default CurrentWeather;
