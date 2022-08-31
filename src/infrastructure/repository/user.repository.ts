import { UserRepositoryPort } from '@domain/user/port/user-repository.port';
import { PrismaClient, User } from '@prisma/client';
import { Result } from '@domain/shared/result';
import { CreateUserRequest } from '@domain/user/interface/create-user.interface';
import { PrismaClientValidationError } from '@prisma/client/runtime';

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(payload: CreateUserRequest): Promise<Result<User>> {
    try {
      console.log("ENTROU NA INFRA")
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
