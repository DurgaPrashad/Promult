import { Request, Response } from 'express';
import { SLAService } from '../services/slaService';

export class SLAController {
  private slaService: SLAService;

  constructor() {
    this.slaService = new SLAService();
  }

  async checkSLA(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const slaStatus = await this.slaService.checkOrderSLA(orderId);
      res.json(slaStatus);
    } catch (error) {
      res.status(500).json({ error: 'Failed to check SLA' });
    }
  }
}
