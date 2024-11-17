import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface BusinessDetails {
  id: string;
  shopifyUrl: string;
  amazonCredentials: {
    accessKey: string;
    secretKey: string;
    marketplace: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
