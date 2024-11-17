import { PrismaClient } from '@prisma/client';
import { ShopifyAPI } from '../integrations/shopify';
import { AmazonMCF } from '../integrations/amazon';

export class ProductSyncService {
  private prisma: PrismaClient;
  private shopify: ShopifyAPI;
  private amazonMCF: AmazonMCF;

  constructor() {
    this.prisma = new PrismaClient();
    this.shopify = new ShopifyAPI();
    this.amazonMCF = new AmazonMCF();
  }

  async startSync(businessId: string) {
    const syncJob = await this.prisma.syncJob.create({
      data: {
        businessId,
        status: 'STARTED',
        startedAt: new Date()
      }
    });

    // Start async sync process
    this.performSync(syncJob.id).catch(console.error);

    return syncJob;
  }

  private async performSync(jobId: string) {
    try {
      const shopifyProducts = await this.shopify.getProducts();
      const amazonInventory = await this.amazonMCF.getInventory();

      for (const product of shopifyProducts) {
        const amazonProduct = amazonInventory.find(p => p.sku === product.sku);
        if (amazonProduct) {
          await this.shopify.updateInventory(product.id, amazonProduct.quantity);
        }
      }

      await this.prisma.syncJob.update({
        where: { id: jobId },
        data: {
          status: 'COMPLETED',
          completedAt: new Date()
        }
      });
    } catch (error) {
      await this.prisma.syncJob.update({
        where: { id: jobId },
        data: {
          status: 'FAILED',
          error: error.message
        }
      });
    }
  }

  async getSyncStatus(businessId: string) {
    return this.prisma.syncJob.findFirst({
      where: { businessId },
      orderBy: { startedAt: 'desc' }
    });
  }
}
