import { Request, Response } from 'express';
import { ProductSyncService } from '../services/productSyncService';

export class ProductSyncController {
  private syncService: ProductSyncService;

  constructor() {
    this.syncService = new ProductSyncService();
  }

  async startSync(req: Request, res: Response) {
    try {
      const businessId = req.params.businessId;
      const syncJob = await this.syncService.startSync(businessId);
      res.json(syncJob);
    } catch (error) {
      res.status(500).json({ error: 'Failed to start sync' });
    }
  }

  async getSyncStatus(req: Request, res: Response) {
    try {
      const businessId = req.params.businessId;
      const status = await this.syncService.getSyncStatus(businessId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get sync status' });
    }
  }
}
