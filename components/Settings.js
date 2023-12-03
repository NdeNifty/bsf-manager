import React, { useState,useEffect } from 'react';
import CitySelector from './settings/cityselector';// Make sure the path is correct

const FarmSettings = ({ onSaveSettings }) => {
  const [location, setLocation] = useState('');
  const [units, setUnits] = useState('metric');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleLocationSelected = (locationString) => {
    setLocation(locationString);
  };

  const handleUnitChange = (event) => {
    setUnits(event.target.value);
  };

  const handleNotificationChange = (event) => {
    setNotificationsEnabled(event.target.checked);
  };

  useEffect(() => {
    console.log('Location updated in FarmSettings: ', location);
  }, [location]);




  const saveSettings = () => {
    const settings = { location, units, notificationsEnabled };
    console.log('The settings : ',settings)
    // Use fetch or axios to send this to your backend
    fetch('http://localhost:3001/api/save-settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
    .then(response => response.json())
    .then(data => console.log(data));
  };
  

  return (
    <div className="settings-container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="block text-gray-700 text-xl font-bold mb-4">Farm Settings</h2>
      <h3>Where is the Farm Located?</h3>
      <CitySelector onLocationSelected={handleLocationSelected} className="mb-4"/>
      
      <div className="mb-2 mt-2">
        <label htmlFor="unit-select" className="block text-gray-700 text-sm font-bold mb-2">Units:</label>
        <select id="unit-select" value={units} onChange={handleUnitChange} className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
      
      <div className="font-bold">
      <h3>Notification</h3>
      <div className=" flex items-center mb-6">
        
        <label htmlFor="notifications" className="block text-gray-700 text-sm   mr-2">Enable:</label>
        <input
          type="checkbox"
          id="notifications"
          checked={notificationsEnabled}
          onChange={handleNotificationChange}
          className="leading-tight items-center"
        />
      </div>
      </div>
      
      <button onClick={saveSettings} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save Settings
      </button>
    </div>
  );
};

export default FarmSettings;
