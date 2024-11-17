import React from 'react';
import BusinessDetailsForm from './BusinessDetailsForm';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Business Integration Details</CardTitle>
        </CardHeader>
        <CardContent>
          <BusinessDetailsForm />
        </CardContent>
      </Card>
    </div>
  );
};