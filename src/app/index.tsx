// pages/index.js
import React, { useState, useEffect } from 'react';
import MetricsWidget from '../app/components/MetricsWidget';
import TaskList from '../app/components/TaskList';
import Dashboard from '../app/components/Dashboard'

export default function Home() {
  // Simulated data (replace with actual data retrieval)
  const [temperatureData, setTemperatureData] = useState(0);
  const [humidityData, setHumidityData] = useState(0);

  // Simulated task data (replace with actual data retrieval)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulated API fetch for metrics data
    // Replace this with actual API calls to fetch data
    // Example:
    // fetch('/api/metrics')
    //   .then(response => response.json())
    //   .then(data => {
    //     setTemperatureData(data.temperature);
    //     setHumidityData(data.humidity);
    //   });

    // Simulated API fetch for task data
    // Replace this with actual API calls to fetch data
    // Example:
    // fetch('/api/tasks')
    //   .then(response => response.json())
    //   .then(data => {
    //     setTasks(data.tasks);
    //   });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>BSF Farm Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <MetricsWidget title="Temperature" data={temperatureData} />
        <MetricsWidget title="Humidity" data={humidityData} />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}
