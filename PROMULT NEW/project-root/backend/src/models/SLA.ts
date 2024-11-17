export class SLA {
   checkSLA(order: any): boolean {
     // Logic to check if the order meets SLA, for example, based on delivery time
     const currentDate = new Date();
     return order.expectedDeliveryTime > currentDate;
   }
 }
 