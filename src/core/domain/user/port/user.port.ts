import {
  CreateUserRequest,
  CreateUserResponse,
} from '../interface/create-user.interface';

export interface UserPort {
  createUser(payload: CreateUserRequest): Promise<CreateUserResponse>;
}
