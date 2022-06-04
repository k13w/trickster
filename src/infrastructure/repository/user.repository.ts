import { UserRepositoryPort } from '@domain/user/port/user-repository.port';
import { PrismaClient } from '@prisma/client';
import { CreateUserRequest } from '@infrastructure/interface/create-user.interface';

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(payload: CreateUserRequest): Promise<any> {
    try {
      await this.prisma.user.create({
        data: payload,
      });
    } catch (e) {
      console.log(e.code)
    }
  }
}
