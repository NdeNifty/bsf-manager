// DataEntryDialog.js
import React, { useState } from 'react';

const DataEntryDialog = ({ isOpen, onClose, onSave }) => {
  const [dataValue, setDataValue] = useState('');

  const handleSave = () => {
    onSave(dataValue);
    onClose();
  };

  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      
       <div className="dialog-content">
        <h2>Data Entry</h2>
        <input
          type="number"
          value={dataValue}
          onChange={(e) => setDataValue(e.target.value)}
          placeholder="Enter data"
        />
        <div className="dialog-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div> 
    </div>
  );
};

export default DataEntryDialog;
