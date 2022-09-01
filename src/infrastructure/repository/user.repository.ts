import { UserRepositoryPort } from '@domain/user/port/user-repository.port';
import { Result } from '@domain/shared/result';
import { PrismaClientValidationError } from '@prisma/client/runtime';
import { PrismaService } from '@application/modules/prisma.service';

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

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
