import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';


const CurrentWeather = ({ location: propLocation }) => {
  const [location, setLocation] = useState(propLocation || '');

  useEffect(() => {
    fetch('http://localhost:3001/api/get-settings')
      .then(response => response.json())
      .then(data => {
        setLocation(data.location);
        console.log("The lcoation coming in is :",data.location)
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
      {weather.temperature && <div className=" text-2xl font-semibold">Temp: {weather.temperature} °C</div>}
      {weather.humidity && <div  className=" text-lg font-semibold">Humidity: {weather.humidity} %</div>}
    </div>
  );
};

export default CurrentWeather;
