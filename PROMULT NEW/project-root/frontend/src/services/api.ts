const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

export const saveBusinessDetails = async (data: any) => {
  const response = await fetch(`${API_BASE_URL}/business`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to save business details');
  return response.json();
};

export const getProductSyncStatus = async () => {
  const response = await fetch(`${API_BASE_URL}/sync/status`);
  if (!response.ok) throw new Error('Failed to get sync status');
  return response.json();
};

export const syncProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/sync/start`, { method: 'POST' });
  if (!response.ok) throw new Error('Failed to start sync');
  return response.json();
};

export const getOrders = async () => {
  const response = await fetch(`${API_BASE_URL}/orders`);
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};

export const updateOrder = async (orderId: string, data: any) => {
  const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to update order');
  return response.json();
};
