import React, { useState } from 'react';
import { updateOrder } from '../services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const OrderManagement: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const handleUpdateOrder = async () => {
    try {
      await updateOrder(orderId, { status });
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-2">Order ID</label>
        <Input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
      </div>
      <div>
        <label className="block mb-2">New Status</label>
        <Input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <Button onClick={handleUpdateOrder}>Update Order</Button>
    </div>
  );
};

export default OrderManagement;