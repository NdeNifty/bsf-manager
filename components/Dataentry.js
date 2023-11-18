import React, { useState } from 'react';
import { createDataEntry } from '../api/apiService';

const Dataentry = () => {
  const [activeData, setActiveData] = useState(null);
  const [recordedValues, setRecordedValues] = useState({});

  const formatDataToRecord = (dataPoint, value) => {
    return {
      dataItem: dataPoint,
      datavalue: value,
    };
  };

 
  const recordData = async (dataPoint, value) => {
    console.log( dataPoint, ": ", value);
    const data = formatDataToRecord(dataPoint, value);
    console.log(data);
    try{
      if(recordedValues){
        const createdDataEntry = await createDataEntry(data);
        console.log('Data entry recorded:', createdDataEntry);
          setRecordedValues({ ...recordedValues, [dataPoint]: value });
          setActiveData(null);
      }
    }
      catch(error){
        console.error('Error creating data entry:', error);
      }
    // createDataEntry(data)
    //   .then((createdEntry) => {
    //     console.log('Data entry recorded:', createdEntry);
    //     setRecordedValues({ ...recordedValues, [dataPoint]: value });
    //     setActiveData(null);
    //   })
    //   .catch((error) => {
    //     console.error('Error creating data entry:', error);
    //   });
  };

  return (
    <div className="dataentry">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 sm:grid-rows-3">
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('eggsHarvested')}>
          Eggs Harvested: {recordedValues['eggHarvested'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('larvaeHarvested')}>
          Larvae Harvested: {recordedValues['larvaeHarvested'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('pupaePlanted')}>
          Pupae Planted: {recordedValues['pupaePlanted'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('wasteStock')}>
          Waste Stock: {recordedValues['wasteStock'] || 0}
        </div>
        <div className="border p-4 cursor-pointer" onClick={() => setActiveData('wasteConsumed')}>
          Waste Consumed: {recordedValues['wasteConsumed'] || 0}
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
