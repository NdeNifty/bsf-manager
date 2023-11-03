import React, { useState } from 'react';
import { createSale } from '../api/apiService'; // Import the API functions

const Sales = () => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [item, setItem] = useState('Eggs');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(parseFloat(e.target.value));
  };

  const handleUnitPriceChange = (e) => {
    setUnitPrice(parseFloat(e.target.value));
  };

  const calculateTotalPrice = () => {
    return quantity * unitPrice;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const salesData = {
      customerName,
      phone,
      item,
      quantity,
      unitPrice,
      totalPrice: calculateTotalPrice(),
     // date: new Date().toLocaleDateString(),
    };
    
    try {
      const createdSale = await createSale(salesData);
      // Handle the response if needed
      

      // Clear the form fields after successful submission
      setCustomerName('');
      setPhone('');
      setItem('');
      setQuantity('');
      setUnitPrice('');
    } catch (error) {
      // Handle errors here
      console.error('Error creating sale', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Record Sales</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="item">Item</label>
          <select
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
            className="w-full p-2 border rounded"
            placeholder='Select Item'
          >
            <option value="Eggs">Eggs</option>
            <option value="Larvae">Larvae</option>
            <option value="Pupa">Pupa</option>
            <option value="Fertilizer">Fertilizer</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="unitPrice">Unit Price</label>
            <input
              type="number"
              id="unitPrice"
              value={unitPrice}
              onChange={handleUnitPriceChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="totalPrice">Total Price</label>
          <input
            id="totalPrice"
            value={calculateTotalPrice()}
            disabled
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            value={new Date().toLocaleDateString()}
            disabled
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover-bg-blue-700">
          Record Sale
        </button>
      </form>
    </div>
  );
};

export default Sales;
