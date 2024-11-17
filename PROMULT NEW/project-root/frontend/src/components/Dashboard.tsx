// Frontend Structure

// src/components/Dashboard.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ProductSync from './ProductSync';
import OrderTracking from './OrderTracking';
import OrderManagement from './OrderManagement';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Product Sync Status</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductSync />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderTracking />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Management</CardTitle>
          </CardHeader>
          <CardContent>
            <OrderManagement />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;