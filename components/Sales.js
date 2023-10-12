import React, { useState } from 'react';

const Sales = () => {
  // Initialize the state for form fields
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Calculate the total price
    const calculatedTotalPrice = quantity * unitPrice;
    setTotalPrice(calculatedTotalPrice);

    // Send the sales data to your backend for recording
    const salesData = {
      customerName,
      phone,
      item,
      quantity,
      unitPrice,
      totalPrice: calculatedTotalPrice,
      date: new Date().toLocaleDateString(),
    };

    // You can send the data to your API endpoint for storage
    // Example: sendSalesDataToAPI(salesData);

    // Clear the form fields after submission
    setCustomerName('');
    setPhone('');
    setItem('');
    setQuantity(0);
    setUnitPrice(0);
    setTotalPrice(0);
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
          <input
            type="text"
            id="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
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
              onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
              required
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            id="totalPrice"
            value={totalPrice}
            onChange={(e) => setTotalPrice(parseFloat(e.target.value))}
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Record Sale
        </button>
      </form>
    </div>
  );
};

export default Sales;
