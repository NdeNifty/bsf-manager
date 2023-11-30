import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import SalesChart from './dashboard/Saleschart';
import Kpis from './dashboard/Kpis';



const Dashboard = () => {
  const [inventoryData, setInventoryData] = useState({});
  const [larvaeCount, setLarvaeCount] = useState(0);
  const [flyCount, setFlyCount] = useState(0);
  const [pupaeCount, setPupaeCount] = useState(0);
  const [wasteInput, setWasteInput] = useState(0);
  const [larvaeSales, setLarvaeSales] = useState(0);
  const [pupaeSales, setPupaeSales] = useState(0);
  const [eggsSales, setEggsSales] = useState(0);
  const [expectedEggs, setExpectedEggs] = useState(0);
  const [expectedLarvae, setExpectedLarvae] = useState(0);
  const [expectedPupae, setExpectedPupae] = useState(0);
  

  useEffect(() => {
    // Fetch inventory data and other relevant data from your backend
    // Example fetch request
    const fetchData = async () => {
      try {
        const response = await fetch('/api/inventory'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        setInventoryData(data.inventoryData);
        setLarvaeCount(data.larvaeCount);
        setFlyCount(data.flyCount);
        setPupaeCount(data.pupaeCount);
        setWasteInput(data.wasteInput);
        setLarvaeSales(data.larvaeSales);
        setPupaeSales(data.pupaeSales);
        setEggsSales(data.eggsSales);
        setExpectedEggs(data.expectedEggs);
        setExpectedLarvae(data.expectedLarvae);
        setExpectedPupae(data.expectedPupae);
      } catch (error) {
        console.error("Fetching data failed:", error);
        // Optionally, set some state to show a user-friendly error message in the UI
      }
    };

    fetchData();
}, []);

  return (
    <div>
      <Kpis />
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-4">
    <SalesChart />
    </div>
     <div className="">
      
       <SalesChart />
        {/* <div className="border p-4">
          <h2 className="text-xl font-semibold mb-2">Expectations</h2>
          <p>Expected Eggs: {expectedEggs}</p>
          <p>Expected Larvae: {expectedLarvae}</p>
          <p>Expected Pupae: {expectedPupae}</p>
        </div>

        <div className="border p-4">
          <h2 className="text-xl font-semibold mb-2">Sales Data</h2>
          <p>Larvae Sales: {larvaeSales}</p>
          <p>Pupae Sales: {pupaeSales}</p>
          <p>Eggs Sales: {eggsSales}</p>
        </div>

        <div className="border p-4">
          <h2 className="text-xl font-semibold mb-2">Efficiency</h2>
          <p>Larvae Sales: {larvaeSales}</p>
          <p>Pupae Sales: {pupaeSales}</p>
          <p>Eggs Sales: {eggsSales}</p>
        </div> */}
      </div> 
      
    </div>
  );
};

export default Dashboard;
