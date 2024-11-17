import { Request, Response } from 'express';
import { BusinessService } from '../services/businessService';
import { validateBusinessDetails } from '../utils/validation';

export class BusinessController {
  private businessService: BusinessService;

  constructor() {
    this.businessService = new BusinessService();
  }

  async saveBusinessDetails(req: Request, res: Response) {
    try {
      const validation = validateBusinessDetails(req.body);
      if (!validation.isValid) {
        return res.status(400).json({ error: validation.errors });
      }

      const details = await this.businessService.saveDetails(req.body);
      res.json(details);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save business details' });
    }
  }

  async getBusinessDetails(req: Request, res: Response) {
    try {
      const businessId = req.params.businessId;
      const details = await this.businessService.getDetails(businessId);
      res.json(details);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch business details' });
    }
  }
}
