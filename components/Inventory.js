// components/Inventory.js
"use client"
import React, { useState, useEffect } from 'react';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState({});

  useEffect(() => {
    // Fetch inventory data from your backend
    fetch('http://localhost:3001/api/aggregated') // Replace with your API endpoint
        .then((response) => response.json())
        .then((data) => {
           
             // Process and set the inventory data
        setInventoryData({
          larvaeCount: data.inventory.totalLarvaeLeft,
          pupaeCount: data.inventory.totalPupaeLeft,
          feedstockAvailable: data.inventory.totalWasteStock,
          // ... additional processing as needed
        });
        
        })
        .catch((error) => {
          console.error('Error fetching inventory data:', error);
        });
}, []);


  return (
    <div className="inventory">
      <h1 className="text-2xl font-semibold mb-4">Farm Inventory</h1>
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Feedstock</h2>
        <p>Feedstock Available: {inventoryData.feedstockAvailable} kg</p>
        {/* Add more feedstock details here */}
      </div>
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Larvae</h2>
        <p>Larvae Count: {inventoryData.larvaeCount}</p>
        {/* Add more larvae details here */}
      </div>
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Pupae</h2>
        <p>Pupae Count: {inventoryData.pupaeCount}</p>
        {/* Add more pupae details here */}
      </div>
      
    </div>
  );
};

export default Inventory;

