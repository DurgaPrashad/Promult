import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';

export class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  async createOrder(req: Request, res: Response) {
    try {
      const order = await this.orderService.createOrder(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  }

  async getOrders(req: Request, res: Response) {
    try {
      const orders = await this.orderService.getOrders(req.query);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const orderId = req.params.orderId;
      const order = await this.orderService.updateOrder(orderId, req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update order' });
    }
  }
}
