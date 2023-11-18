// api/apiService.js

const dataentryUrl = 'http://localhost:3001/api/add-data-entry'; 
const getinventoryUrl = 'http://localhost:3001/api/aggregated';
const salesUrl = 'http://localhost:3001/api/add-sale';
// Adjust the base URL as needed

// Function to create a new data entry
export const createDataEntry = async (dataPoint) => {
  console.log("The data being sent: ", dataPoint)
  try {
    
    const response = await fetch(dataentryUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataPoint),
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
