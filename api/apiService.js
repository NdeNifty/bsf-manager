// api/apiService.js
const dataentryUrl = 'http://localhost:3001/api/add-data-entry'; 
const getinventoryUrl = 'http://localhost:3001/api/aggregated';// Adjust the base URL as needed

// Function to create a new data entry
export const createDataEntry = async (data) => {
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

// Add other API functions for GET, PUT, and DELETE requests as needed.
