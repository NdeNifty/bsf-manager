import React from 'react';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import Kpis from './dashboard/Kpis';


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
const LarvaeForcastChartWithNoSSR = dynamic(() => import('./dashboard/LarvaeForcastChart'), {
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
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-8"> {/* Adjusted to take 9/12 of the width */}
          <SalesChartWithNoSSR />
          <ProductionChartWithNoSSR />
          <EfficientcyChartWithNoSSR />
        </div>
        <div className="col-span-4 h-64"> {/* Adjusted to take 3/12 of the width */}
          <LarvaeForcastChartWithNoSSR />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
