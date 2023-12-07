import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import moment from 'moment';

const LarvaeForecastChart = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/all-data-entries')
      .then((response) => response.json())
      .then((data) => {
        const processedData = processData(data);
        setForecastData(processedData);
      })
      .catch((error) => {
        console.error('Error fetching egg data:', error);
      });
  }, []);

  const processData = (data) => {
    // Assuming 'eggsHarvested' is the key for the number of eggs collected
    return data
      .filter((entry) => entry.dataItem === 'eggsHarvested')
      .map((entry) => {
        const hatchDate = moment(entry.date).add(14, 'days'); // 4 days to hatch + 10 days to sell
        return {
          date: hatchDate.format('DD/MM'), // Format the date as YYYY-MM-DD
          larvae: entry.dataValue || entry.datavalue // Use the appropriate field for egg count
        };
      })
      .sort((a, b) => moment(a.date).diff(moment(b.date))); // Sort by date
  };

  return (
    <div className="text-center">
    <div className="mt-2">
        <span>Larvae Forecast</span>
    </div>
    <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <BarChart data={forecastData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="larvae" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    </div>
</div>

  );
};

export default LarvaeForecastChart;
