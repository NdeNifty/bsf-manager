import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const TemperatureForecastChart = ({ location: propLocation }) => {
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState(propLocation || '');

  useEffect(() => {
    fetch('http://localhost:3001/api/get-settings')
      .then(response => response.json())
      .then(data => {
        if (data.location) {
          setLocation(data.location);
          fetchForecastData(data.location);
        }
      })
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const locationApiKey = '42c9336b75eb857b70115f879df245d7';

  const fetchForecastData = async (location) => {
    try {
      const geocodingResp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${locationApiKey}`);
      const geocodingData = await geocodingResp.json();
      
      if (geocodingData.length === 0) {
        throw new Error('Location not found');
      }

      const { lat, lon } = geocodingData[0];

      const forecastResp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
      const forecastData = await forecastResp.json();

      const chartData = forecastData.daily.time.map((date, index) => ({
        date: moment(date).format('DD/MM'), 
        high: forecastData.daily.temperature_2m_max[index],
        low: forecastData.daily.temperature_2m_min[index]
      }));

      setForecastData(chartData);
    } catch (error) {
      console.error('Failed to fetch forecast data:', error);
    }
  };

  if (forecastData.length === 0) {
    return <div>Loading forecast data...</div>;
  }

  return (
    <div>
      <LineChart
        width={400}
        height={250}
        data={forecastData}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="high" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="low" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default TemperatureForecastChart;






