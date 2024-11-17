import React, { useEffect, useState } from 'react';
import { getProductSyncStatus, syncProducts } from '../services/api';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const ProductSync: React.FC = () => {
  const [syncStatus, setSyncStatus] = useState({
    inProgress: false,
    progress: 0,
    lastSync: null,
    totalProducts: 0,
    syncedProducts: 0
  });

  useEffect(() => {
    const fetchStatus = async () => {
      const status = await getProductSyncStatus();
      setSyncStatus(status);
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSync = async () => {
    try {
      await syncProducts();
    } catch (error) {
      console.error('Sync failed:', error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Sync Status</h3>
        <Progress value={syncStatus.progress} className="mt-2" />
        <p className="text-sm text-gray-500 mt-1">
          {syncStatus.syncedProducts} of {syncStatus.totalProducts} products synced
        </p>
      </div>
      <Button 
        onClick={handleSync}
        disabled={syncStatus.inProgress}
      >
        {syncStatus.inProgress ? 'Syncing...' : 'Start Sync'}
      </Button>
    </div>
  );
};

export default ProductSync;