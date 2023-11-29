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
const ProductionForcastChartWithNoSSR = dynamic(() => import('./dashboard/ProductionForcastChart'), {
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
        <div className="col-span-4"> {/* Adjusted to take 3/12 of the width */}
          <ProductionForcastChartWithNoSSR />
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
