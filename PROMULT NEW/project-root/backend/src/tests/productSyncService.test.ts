import { ProductSyncService } from './productSyncService';
import { ShopifyAPI } from '../integrations/shopify';
import { AmazonMCF } from '../integrations/amazon';
import { PrismaClient } from '@prisma/client';

// Mock the dependencies
jest.mock('@prisma/client');
jest.mock('../integrations/shopify');
jest.mock('../integrations/amazon');

describe('ProductSyncService', () => {
  let productSyncService: ProductSyncService;
  let shopify: ShopifyAPI;
  let amazonMCF: AmazonMCF;

  beforeEach(() => {
    shopify = new ShopifyAPI();
    amazonMCF = new AmazonMCF();
    productSyncService = new ProductSyncService();
  });

  test('should start product sync', async () => {
    const mockSyncData = { businessId: 'business_123' };

    // Mock API calls
    shopify.getProducts = jest.fn().mockResolvedValue([
      { sku: 'product_123', title: 'Test Product' },
    ]);
    amazonMCF.getInventory = jest.fn().mockResolvedValue([
      { sku: 'product_123', quantity: 100 },
    ]);
    shopify.updateInventory = jest.fn().mockResolvedValue(true);

    const result = await productSyncService.startSync(mockSyncData.businessId);

    expect(result).toHaveProperty('status', 'STARTED');
    expect(shopify.updateInventory).toHaveBeenCalled();
  });

  test('should handle sync error gracefully', async () => {
    const mockSyncData = { businessId: 'business_123' };

    // Simulate an error during sync
    shopify.getProducts = jest.fn().mockRejectedValue(new Error('Sync failed'));

    const result = await productSyncService.startSync(mockSyncData.businessId);

    expect(result).toHaveProperty('status', 'FAILED');
    expect(result).toHaveProperty('error', 'Sync failed');
  });
});
