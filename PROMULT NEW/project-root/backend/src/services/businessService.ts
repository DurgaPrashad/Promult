import { PrismaClient } from '@prisma/client';
import { encrypt } from '../utils/encryption';

export class BusinessService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async saveDetails(details: any) {
    const encryptedCredentials = encrypt(details.credentials);
    return this.prisma.businessDetails.create({
      data: {
        shopifyUrl: details.shopifyUrl,
        credentials: encryptedCredentials,
        // other fields
      }
    });
  }

  async getDetails(businessId: string) {
    return this.prisma.businessDetails.findUnique({
      where: { id: businessId }
    });
  }
}
