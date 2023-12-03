'use client';
import React, { useState, useEffect } from 'react';
import FarmSettings from '../Settings';
import CurrentWeather from '../weather/currentweather';
import 'tailwindcss/tailwind.css';

const Kpis = () => {
    const [inventoryData, setInventoryData] = useState({});

    const [settings, setSettings] = useState({
        location: '',
        units: 'metric',
        notificationsEnabled: false
      });
    
      const handleSaveSettings = (newSettings) => {
        setSettings(newSettings);
      };

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
        <div className="flex flex-wrap  p-2">
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-blue-500 text-white rounded-sm shadow-xl">
                <span className="text-lg font-semibold">Larvae</span>
                <span className="text-2xl font-bold">{inventoryData.larvaeCount} <span>Kg</span></span>
            </div>
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-orange-500 text-white rounded-sm shadow-xl">
                <span className="text-lg font-semibold">Pupae</span>
                <span className="text-2xl font-bold">{inventoryData.pupaeCount} <span>Kg</span></span>
            </div>
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-green-500 text-white rounded-sm shadow-xl">
                <span className="text-lg font-semibold">Eggs</span>
                <span className="text-2xl font-bold">1500 <span>Grams</span></span>
            </div>
            <div className="flex flex-col items-center p-2 4 m-2 w-60 bg-red-500 text-white rounded-sm shadow-xl">
                <span className="text-lg font-semibold">Feed Stock</span>
                <span className="text-2xl font-bold">{inventoryData.feedstockAvailable} <span>Kg</span></span>
            </div>
            <div className="flex flex-col items-center p-2 4 m-2 w-60 bg-blue-500 text-white rounded-sm shadow-xl">
                {/* <span className="text-lg font-semibold">Current Temperature</span>
                <span className="text-2xl font-bold">56 <span>Degrees</span></span> */}
                
                <div>
                   <CurrentWeather />
              </div>

            

            </div>
        </div>
    );
}

export default Kpis;
