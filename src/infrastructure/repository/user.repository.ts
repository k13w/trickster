import { UserPort } from '../../core/domain/user/port/user.port';
import { PrismaClient } from '@prisma/client';

export class UserRepository implements UserPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(payload: any): Promise<any> {
    return await this.prisma.user.create({
      data: payload,
    });
  }
}
