// api/apiService.js

const dataentryUrl = 'http://localhost:3001/api/add-data-entry'; 
const getinventoryUrl = 'http://localhost:3001/api/aggregated';
const salesUrl = 'http://localhost:3001/api/add-sale';
const saveSettingsUrl = 'http://localhost:3001/api/save-settings'; // Adjust the URL as needed
const getSettingsUrl = 'http://localhost:3001/api/get-settings'; // Adjust the URL as needed
// Adjust the base URL as needed

// Function to create a new data entry
export const createDataEntry = async (data) => {
  console.log("The data being sent: ", data)
  try {
    
    const response = await fetch(dataentryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating data entry', error);
    throw error;
  }
};

//function to fectch inventory data
export const fetchInventoryData = async () => {
  try {
    const response = await fetch(getinventoryUrl); // Adjust to your inventory endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching inventory data', error);
    throw error;
  }
};


//function to record sales data

export const createSale = async (saleData) => {
  try {
    console.log('Data being sent:', saleData); // Log the data being sent

    const response = await fetch(salesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(saleData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating sale', error);
    throw error;
  }
};



//function to fetch sales data
export const fetchSales = async () => {
  try {
    const response = await fetch(salesUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching sales data', error);
    throw error;
  }
};

// Add other API functions for GET, PUT, and DELETE requests as needed.

//Get Settings from DB
export const fetchSettings = async () => {
  try {
    const response = await fetch(getSettingsUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching settings', error);
    throw error;
  }
};


//Save Settings to DB
export const saveSettings = async (settingsData) => {
  try {
    const response = await fetch(saveSettingsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settingsData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving settings', error);
    throw error;
  }
};

