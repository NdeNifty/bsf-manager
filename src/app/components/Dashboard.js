// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import MetricsWidget from './MetricsWidget';
import TaskList from './TaskList';

export default function Dashboard() {
  // State and useEffect to fetch and display data

  return (
    <div>
      <h1>BSF Farm Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <MetricsWidget title="Temperature" data={temperatureData} />
        <MetricsWidget title="Humidity" data={humidityData} />
      </div>
      <TaskList />
    </div>
  );
}
