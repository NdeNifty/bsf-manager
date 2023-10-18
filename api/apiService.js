// api/apiService.js
const baseUrl = 'api/data-entries'; // Adjust the base URL as needed

// Function to create a new data entry
export const createDataEntry = async (data) => {
  try {
    const response = await fetch(baseUrl, {
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


// Add other API functions for GET, PUT, and DELETE requests as needed.
