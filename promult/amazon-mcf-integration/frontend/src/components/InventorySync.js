import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InventorySync = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const syncInventory = async () => {
      try {
        const response = await axios.get("/api/sync-inventory");
        setInventory(response.data);
      } catch (error) {
        console.error("Error syncing inventory:", error);
      }
    };

    syncInventory();
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.sku}>{item.name} - {item.stock}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventorySync;