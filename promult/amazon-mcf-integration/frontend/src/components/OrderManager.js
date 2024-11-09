import React, { useState } from 'react';
import axios from 'axios';

const OrderManager = () => {
  const [orderData, setOrderData] = useState({ sku: '', quantity: 1 });
  const [message, setMessage] = useState('');

  const createOrder = async () => {
    try {
      const response = await axios.post('/api/create-order', orderData);
      setMessage('Order created successfully!');
      console.log('Order created:', response.data);
    } catch (error) {
      console.error('Error creating order:', error);
      setMessage('Failed to create order.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={(e) => { e.preventDefault(); createOrder(); }}>
        <input
          type="text"
          name="sku"
          value={orderData.sku}
          onChange={handleInputChange}
          placeholder="SKU"
          required
        />
        <input
          type="number"
          name="quantity"
          value={orderData.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
          required
        />
        <button type="submit">Create Order</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OrderManager;