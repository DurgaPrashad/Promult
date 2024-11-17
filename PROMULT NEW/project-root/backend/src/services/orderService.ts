import { PrismaClient } from '@prisma/client';
import { ShopifyAPI } from '../integrations/shopify';
import { AmazonMCF } from '../integrations/amazon';
import { SLAService } from './slaService';

export class OrderService {
  private prisma: PrismaClient;
  private shopify: ShopifyAPI;
  private amazonMCF: AmazonMCF;
  private slaService: SLAService;

  constructor() {
    this.prisma = new PrismaClient();
    this.shopify = new ShopifyAPI();
    this.amazonMCF = new AmazonMCF();
    this.slaService = new SLAService();
  }

  async createOrder(orderData: any) {
    const slaCheck = await this.slaService.checkOrderSLA(orderData);
    if (!slaCheck.isValid) {
      throw new Error('Order does not meet SLA requirements');
    }

    const fulfillmentOrder = await this.amazonMCF.createFulfillmentOrder(orderData);

    return this.prisma.order.create({
      data: {
        shopifyOrderId: orderData.shopifyOrderId,
        fulfillmentOrderId: fulfillmentOrder.id,
        status: 'PENDING',
        // other fields
      }
    });
  }

  async getOrders(filters: any) {
    return this.prisma.order.findMany({
      where: filters,
      include: {
        slaStatus: true
      }
    });
  }

  async updateOrder(orderId: string, updateData: any) {
    return this.prisma.order.update({
      where: { id: orderId },
      data: updateData
    });
  }
}
