import { UserRepositoryPort } from '../../core/domain/user/port/user-repository.port';
import { PrismaClient, User } from '@prisma/client';
import { CreateUserRequest } from '../interface/create-user.interface';

export class UserRepository implements UserRepositoryPort {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(payload: CreateUserRequest): Promise<User> {
    return await this.prisma.user.create({
      data: payload,
    });
  }
}
