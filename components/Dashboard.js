import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import Kpis from './dashboard/Kpis';
import FarmSettings from './Settings';
import TemperatureForecastChart from './weather/7daysforcast';

// Import SalesChart dynamically with SSR disabled
const SalesChartWithNoSSR = dynamic(() => import('./dashboard/Saleschart'), {
  ssr: false
});
const ProductionChartWithNoSSR = dynamic(() => import('./dashboard/ProductionChart'), {
  ssr: false
});
const EfficiencyChartWithNoSSR = dynamic(() => import('./dashboard/EfficiencyChart'), {
  ssr: false
});
const LarvaeForcastChartWithNoSSR = dynamic(() => import('./dashboard/LarvaeForcastChart'), {
  ssr: false
});
const SmallColumn = () => {
  // Placeholder for SmallColumn component
  return <div>Small Column Content</div>;
};

const Dashboard = () => {


  return (
    <div className="dashboardbg px-4">
    <Kpis />
    <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-4">
      <div className="col-span-1 md:col-span-8">
        <div className="bg-white border rounded pb-2">
          <SalesChartWithNoSSR />
        </div>
        <div className="bg-white border rounded pb-2 mt-2">
          <ProductionChartWithNoSSR />
        </div>
        <div className="bg-white border rounded pb-2 mt-2">
          <EfficiencyChartWithNoSSR />
        </div>
      </div>
  
      <div className="col-span-1 md:col-span-4 pb-2 h-auto md:h-64">
        <div className="bg-white border rounded pb-2">
          <LarvaeForcastChartWithNoSSR />
        </div>
        <div className="bg-white border rounded pb-2 mt-2">
          <TemperatureForecastChart />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
