import React, { useState, useEffect } from 'react';
import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const EfficiencyChart = () => {
  const [efficiencyData, setEfficiencyData] = useState([]);
  const [timeframe, setTimeframe] = useState('monthly');

  useEffect(() => {
    fetch('http://localhost:3001/api/all-data-entries')
      .then((response) => response.json())
      .then((data) => {
        const processedData = processData(data, timeframe);
        setEfficiencyData(processedData);
      })
      .catch((error) => {
        console.error('Error fetching production data:', error);
      });
  }, [timeframe]);

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  const processData = (rawData, timeframe) => {
   const groupedData = rawData.reduce((acc, entry) => {
     // Handle both 'datavalue' and 'dataValue' due to inconsistency in the field names
     const valueField = entry.datavalue !== undefined ? entry.datavalue : entry.dataValue;
     if (!entry.dataItem || valueField === undefined) {
       // Skip entries without dataItem or a value field
       console.error(`Invalid entry missing dataItem or value:`, entry);
       return acc;
     }
 
     const momentDate = moment(entry.date);
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
 
     const item = entry.dataItem;
     const value = parseFloat(valueField); // Convert valueField to a number
 
     if (!isNaN(value)) {
       acc[periodKey][item] = (acc[periodKey][item] || 0) + value;
     } else {
       // If value is not a number, log an error
       console.error(`Invalid value for dataItem ${item} in entry:`, entry);
     }
 
     return acc;
   }, {});
 
   // Calculate efficiency after grouping and summing your data by period
   return Object.keys(groupedData).map(period => {
     const periodData = groupedData[period];
     const larvae = periodData['larvaeHarvested'] || 0;
     const pupa = periodData['pupaePlanted'] || 0;
     const feedConsumed = periodData['wasteConsumed'] || 0;

     // Detailed logging
    console.log(`Period: ${period}`);
    console.log(`Larvae: ${larvae}, Pupa: ${pupa}, Feed Consumed: ${feedConsumed}`);

 
    let efficiency = 0;
    if (feedConsumed > 0) {
      efficiency = (larvae + pupa) / feedConsumed;
    } else {
      console.log(`Feed consumed is zero or missing for period: ${period}`);
    }

    console.log(`Efficiency for ${period}: ${efficiency}`);
     return {
       date: period,
       efficiency, // Include efficiency in your data object
       ...periodData
     };
   }).sort((a, b) => moment(a.date).diff(moment(b.date)));
 };
 

  const formatXAxis = (tickItem) => {
    switch (timeframe) {
      case 'weekly':
        return moment(tickItem).format('MMM DD');
      case 'monthly':
        return moment(tickItem).format('MMM YYYY');
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
        data={efficiencyData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={formatXAxis} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="efficiency" stroke="#82ca9d" fill="#82ca9d" activeDot={{ r: 8 }} />
      </AreaChart>
    </div>
  );
};

export default EfficiencyChart;
