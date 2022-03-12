import { CreateUserRequest, User } from '../interface/create-user.interface';

export interface UserRepositoryPort {
  createUser(payload: CreateUserRequest): Promise<User>;
}
