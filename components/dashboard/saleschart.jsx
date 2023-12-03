import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import moment from 'moment';

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [timeframe, setTimeframe] = useState('monthly');

  useEffect(() => {
    fetch('http://localhost:3001/api/all-sales')
      .then((response) => response.json())
      .then((data) => {
        const processedData = processData(data, timeframe);
        setSalesData(processedData);
      })
      .catch((error) => {
        console.error('Error fetching sales data:', error);
      });
  }, [timeframe]);

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  const processData = (rawData, timeframe) => {
    // Group data by the selected timeframe
    const groupedData = rawData.reduce((acc, sale) => {
      const momentDate = moment(sale.date);
      let periodKey;
      switch (timeframe) {
        case 'weekly':
          periodKey = momentDate.startOf('isoWeek').format('YYYY-MM-DD');
          break;
        case 'monthly':
          periodKey = momentDate.startOf('month').format('YYYY-MM');
          break;
        case 'quarterly':
          periodKey = `Q${momentDate.quarter()} ${momentDate.year()}`;
          break;
        case 'yearly':
          periodKey = momentDate.startOf('year').format('YYYY');
          break;
        default:
          periodKey = momentDate.format('YYYY-MM-DD');
      }

      if (!acc[periodKey]) {
        acc[periodKey] = {};
      }
      const item = sale.item;
      acc[periodKey][item] = (acc[periodKey][item] || 0) + sale.totalPrice;

      return acc;
    }, {});

    // Convert the grouped data into an array format suitable for Recharts
    const data = Object.entries(groupedData).map(([period, sales]) => ({
      date: period,
      ...sales,
    }));

    // Sort data based on the date
    return data.sort((a, b) => moment(a.date).diff(moment(b.date)));
  };

  const formatXAxis = (tickItem) => {
    // Format the tickItem based on the selected timeframe
    switch (timeframe) {
      case 'weekly':
      case 'monthly':
        return moment(tickItem).format('MMM DD');
      case 'quarterly':
        return tickItem;
      case 'yearly':
        return moment(tickItem).format('YYYY');
      default:
        return tickItem;
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="timeframe-select" className="mr-2">Select Timeframe:</label>
        <select id="timeframe-select" value={timeframe} onChange={handleChange} className="p-2 rounded border">
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <AreaChart
        width={850}
        height={250}
        data={salesData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Map over the keys in salesData[0] (except 'date') to create Area components */}
        {salesData[0] && Object.keys(salesData[0])
          .filter(key => key !== 'date')
          .map((key, idx) => (
            <Area
              key={idx}
              type="monotone"
              dataKey={key}
              stroke={colors[idx % colors.length]}
              fillOpacity={0.6}
              fill={`url(#color${key.replace(/\s+/g, '')})`}
            />
        ))}
        {/* Defs for gradients */}
        {salesData[0] && Object.keys(salesData[0])
          .filter(key => key !== 'date')
          .map((key, idx) => (
            <defs key={idx}>
              <linearGradient id={`color${key.replace(/\s+/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[idx % colors.length]} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colors[idx % colors.length]} stopOpacity={0}/>
              </linearGradient>
            </defs>
        ))}
      </AreaChart>
    </div>
  );
};

// Define your colors array outside of the component
const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#a4de6c', '#d0ed57', '#83a6ed'];

export default SalesChart;
