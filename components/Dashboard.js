import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import Kpis from './dashboard/Kpis';
import FarmSettings from './Settings';

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
    <div>
      <Kpis />
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-8">
          <SalesChartWithNoSSR />
          <ProductionChartWithNoSSR />
          <EfficiencyChartWithNoSSR />
        </div>
        <div className="col-span-4 h-64">
          <LarvaeForcastChartWithNoSSR />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
