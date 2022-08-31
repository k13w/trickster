import { CreateUserRequest } from '../interface/create-user.interface';
import { Result } from '@domain/shared/result';
import { User } from '@prisma/client';

export interface UserRepositoryPort {
  createUser(payload: CreateUserRequest): Promise<Result<User>>;
}
