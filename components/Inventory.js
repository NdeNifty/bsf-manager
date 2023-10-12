// components/Inventory.js
"use client"
import React, { useState, useEffect } from 'react';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState({});

  useEffect(() => {
    // Fetch inventory data from your backend
    // Example fetch request
    fetch('/api/inventory') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setInventoryData(data.inventoryData);
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
        <p>Feedstock Availability: {inventoryData.feedstockAvailability} kg</p>
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
      <div className="border p-4">
        <h2 className="text-xl font-semibold mb-2">Waste</h2>
        <p>Waste Input: {inventoryData.wasteInput} kg</p>
        {/* Add more waste details here */}
      </div>
    </div>
  );
};

export default Inventory;

