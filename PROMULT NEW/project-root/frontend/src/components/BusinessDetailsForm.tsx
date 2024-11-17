import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { saveBusinessDetails } from '../services/api';

const BusinessDetailsForm: React.FC = () => {
  const [formData, setFormData] = useState({
    shopifyUrl: '',
    amazonAccessKey: '',
    amazonSecretKey: '',
    amazonMarketplace: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveBusinessDetails(formData);
      setSuccess(true);
      setError('');
    } catch (err) {
      setError('Failed to save business details');
      setSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Shopify Store URL</label>
        <Input
          type="text"
          value={formData.shopifyUrl}
          onChange={(e) => setFormData({...formData, shopifyUrl: e.target.value})}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Amazon Access Key</label>
        <Input
          type="text"
          value={formData.amazonAccessKey}
          onChange={(e) => setFormData({...formData, amazonAccessKey: e.target.value})}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Amazon Secret Key</label>
        <Input
          type="password"
          value={formData.amazonSecretKey}
          onChange={(e) => setFormData({...formData, amazonSecretKey: e.target.value})}
          required
        />
      </div>
      <div>
        <label className="block mb-2">Amazon Marketplace</label>
        <Input
          type="text"
          value={formData.amazonMarketplace}
          onChange={(e) => setFormData({...formData, amazonMarketplace: e.target.value})}
          required
        />
      </div>
      <Button type="submit">Save Details</Button>
      
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {success && (
        <Alert>
          <AlertDescription>Business details saved successfully!</AlertDescription>
        </Alert>
      )}
    </form>
  );
};

export default BusinessDetailsForm;