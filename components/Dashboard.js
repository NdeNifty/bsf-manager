import React from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import Kpis from './dashboard/Kpis';
import ProductionChart from './dashboard/ProductionChart';

// Import SalesChart dynamically with SSR disabled
const SalesChartWithNoSSR = dynamic(() => import('./dashboard/Saleschart'), {
  ssr: false
});
const ProductionChartWithNoSSR = dynamic(() => import('./dashboard/ProductionChart'), {
  ssr: false
});
const EfficientcyChartWithNoSSR = dynamic(() => import('./dashboard/EfficiencyChart'), {
  ssr: false
});
const smallColumn = () => {
  // Placeholder for smallColumn component
  return <div>Small Column Content</div>;
};

const Dashboard = () => {
  return (
    <div>
      <Kpis />
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-3">
          <SalesChartWithNoSSR />
          <ProductionChartWithNoSSR />
          <EfficientcyChartWithNoSSR />
        </div>
        <div className="col-span-1">
          <smallColumn />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
