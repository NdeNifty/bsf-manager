'use client'
import React, { useState } from 'react';

const Dataentry = () => {
  const [activeData, setActiveData] = useState(null);
  const [recordedValues, setRecordedValues] = useState({});

  const recordData = (dataPoint, value) => {
    // Handle the logic to record data here, e.g., send an API request

    // For the example, we'll update the recorded values object
    setRecordedValues({ ...recordedValues, [dataPoint]: value });

    // Clear the active data
    setActiveData(null);
  };

  return (
    <div className="dataentry">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 sm:grid-rows-3">
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Eggs Harvested')}>
          Eggs Harvested: {recordedValues['Eggs Harvested'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Larvae Harvested')}>
          Larvae Harvested: {recordedValues['Larvae Harvested'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Pupae Harvested')}>
          Pupae Harvested: {recordedValues['Pupae Harvested'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Pupae Planted')}>
          Pupae Planted: {recordedValues['Pupae Planted'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Waste Stock')}>
          Waste Stock: {recordedValues['Waste Stock'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('Waste Input')}>
          Waste Input: {recordedValues['Waste Input'] || 0}
        </div>
      </div>
      {activeData && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Input {activeData}</h2>
            <input
              type="number"
              value={recordedValues[activeData] || ''}
              placeholder={`Enter value for ${activeData}`}
              onChange={(e) => setRecordedValues({ ...recordedValues, [activeData]: e.target.value })}
            />
            <div className="modal-button-group">
              <button onClick={() => recordData(activeData, recordedValues[activeData])}>Record</button>
              <button onClick={() => setActiveData(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dataentry;
