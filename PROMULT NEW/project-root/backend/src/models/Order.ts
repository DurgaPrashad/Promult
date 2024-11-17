export interface Order {
   id: string;
   shopifyOrderId: string;
   fulfillmentOrderId: string;
   status: string;
   createdAt: Date;
   updatedAt: Date;
 }
 