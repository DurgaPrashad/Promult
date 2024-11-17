import { OrderService } from './orderService';
import { PrismaClient } from '@prisma/client';
import { SLAService } from './slaService';
import { AmazonMCF } from '../integrations/amazon';
import { ShopifyAPI } from '../integrations/shopify';

// Mock the dependencies
jest.mock('@prisma/client');
jest.mock('./slaService');
jest.mock('../integrations/amazon');
jest.mock('../integrations/shopify');

describe('OrderService', () => {
  let orderService: OrderService;
  let slaService: SLAService;
  let amazonMCF: AmazonMCF;
  let shopify: ShopifyAPI;

  beforeEach(() => {
    slaService = new SLAService();
    amazonMCF = new AmazonMCF();
    shopify = new ShopifyAPI();
    orderService = new OrderService();
  });

  test('should create order if SLA is valid', async () => {
    const mockOrderData = {
      shopifyOrderId: 'shopify_123',
      fulfillmentOrderId: 'amazon_123',
      // Other order details
    };

    // Mock SLA check
    slaService.checkOrderSLA = jest.fn().mockResolvedValue({ isValid: true });

    // Mock Amazon fulfillment
    amazonMCF.createFulfillmentOrder = jest.fn().mockResolvedValue({ id: 'amazon_123' });

    const result = await orderService.createOrder(mockOrderData);

    expect(result).toHaveProperty('shopifyOrderId', 'shopify_123');
    expect(amazonMCF.createFulfillmentOrder).toHaveBeenCalledWith(mockOrderData);
  });

  test('should throw error if SLA is not valid', async () => {
    const mockOrderData = {
      shopifyOrderId: 'shopify_123',
      fulfillmentOrderId: 'amazon_123',
    };

    // Mock SLA check to fail
    slaService.checkOrderSLA = jest.fn().mockResolvedValue({ isValid: false });

    try {
      await orderService.createOrder(mockOrderData);
    } catch (error) {
      expect(error.message).toBe('Order does not meet SLA requirements');
    }
  });
});
