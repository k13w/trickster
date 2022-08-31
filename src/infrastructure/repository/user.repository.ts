import { UserRepositoryPort } from '@domain/user/port/user-repository.port';
import { PrismaClient } from '@prisma/client';
import { Result } from '@domain/shared/result';
import { PrismaClientValidationError } from '@prisma/client/runtime';

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(payload: any): Promise<Result<unknown>> {
    try {
      const user = await this.prisma.user.create({
        data: payload,
      });

      return user as any
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
      }
    }
  }
}
