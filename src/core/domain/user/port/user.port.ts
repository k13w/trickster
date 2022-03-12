import {
  CreateUserRequest,
  CreateUserResponse,
} from '../interface/create-user.interface';

export interface UserRepositoryPort {
  createUser(payload: CreateUserRequest): Promise<CreateUserResponse>;
}
