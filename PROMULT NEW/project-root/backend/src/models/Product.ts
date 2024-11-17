export interface Product {
   id: string;
   sku: string;
   title: string;
   shopifyProductId: string;
   amazonSku: string;
   inventory: number;
   lastSyncedAt: Date;
 }
 