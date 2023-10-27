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
            // Assuming you're getting the above format
            let larvaeHarvested = data.find(item => item.larvaeHarvested)?.larvaeHarvested || 0;
            let pupaePlanted = data.find(item => item.pupaePlanted)?.pupaePlanted || 0;
            let wasteavailable = data.find(item => item.pupaePlanted)?.pupaePlanted || 0;
            

            // Modify this if you're getting more/different data
            setInventoryData({
                larvaeCount: larvaeHarvested,
                pupaeCount: pupaePlanted,
                wasteavailable: wasteavailable,
                // ... add other data as needed
            });
        })
        .catch((error) => {
            console.error(error);
        });
}, []);


  return (
    <div className="inventory">
      <h1 className="text-2xl font-semibold mb-4">Farm Inventory</h1>
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Feedstock</h2>
        <p>Feedstock Availability: {inventoryData.wasteavailable} kg</p>
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

