import { SLA } from './sla';
import { Order } from './order';

export class SLAService {
  sla: SLA;
  orderService: Order;

  constructor() {
    this.sla = new SLA();
    this.orderService = new Order();
  }

  async processOrder(orderData: any) {
    // Check if the order meets SLA requirements
    const isSLAValid = this.sla.checkSLA(orderData);

    if (isSLAValid) {
      // Process order if SLA is valid
      return await this.orderService.createOrder(orderData);
    } else {
      throw new Error('Order does not meet SLA requirements');
    }
  }
}
