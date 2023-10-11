// components/Dashboard.js
"use client"
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [inventoryData, setInventoryData] = useState({});
  const [larvaeCount, setLarvaeCount] = useState(0);
  const [flyCount, setFlyCount] = useState(0);
  const [expectedEggs, setExpectedEggs] = useState(0);

  useEffect(() => {
    // Fetch inventory data and other relevant data from your backend
    // Example fetch request
    fetch('/api/inventory') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setInventoryData(data.inventoryData);
        setLarvaeCount(data.larvaeCount);
        setFlyCount(data.flyCount);
        setExpectedEggs(data.expectedEggs);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Inventory Data */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Inventory Data</h2>
        <p>Feedstock Availability: {inventoryData.feedstockAvailability} kg</p>
        <p>Larvae Count: {larvaeCount}</p>
        <p>Fly Count: {flyCount}</p>
        <p>Expected Eggs: {expectedEggs}</p>
      </div>
      {/* Add more sections for other dashboard data */}
    </div>
  );
};

export default Dashboard;
