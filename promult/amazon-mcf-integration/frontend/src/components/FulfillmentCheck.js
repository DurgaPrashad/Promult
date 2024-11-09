import React, { useState } from 'react';
import axios from 'axios';

const FulfillmentCheck = () => {
  const [inventory, setInventory] = useState([]);
  const [orderData, setOrderData] = useState({ sku: '', quantity: 1 });
  const [message, setMessage] = useState('');

  const syncInventory = async () => {
    try {
      const response = await axios.get('/api/sync-inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error syncing inventory:', error);
    }
  };

  const createOrder = async () => {
    try {
      const response = await axios.post('/api/create-order', orderData);
      setMessage('Order created successfully!');
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
      <h1>Fulfillment Check</h1>
      <button onClick={syncInventory}>Sync Inventory</button>
      <ul>
        {inventory.map((item) => (
          <li key={item.sku}>{item.name} - {item.stock}</li>
        ))}
      </ul>
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

export default FulfillmentCheck;