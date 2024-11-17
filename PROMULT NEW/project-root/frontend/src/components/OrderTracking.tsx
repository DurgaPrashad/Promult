// src/components/OrderTracking.tsx
import React, { useEffect, useState } from 'react';
import { getOrders } from '../services/api';

const OrderTracking: React.FC = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading orders...</div>;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Recent Orders</h3>
      <div className="divide-y">
        {orders.map((order: any) => (
          <div key={order.id} className="py-2">
            <p>Order #{order.number}</p>
            <p className="text-sm text-gray-500">Status: {order.status}</p>
            <p className="text-sm text-gray-500">
              SLA: {order.slaStatus ? 'Within SLA' : 'SLA Breached'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;