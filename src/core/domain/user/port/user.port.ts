import {
  CreateUserRequest,
  CreateUserResponse,
} from '../interface/create-user.interface';

export interface UserPort {
  newVirtualCard(payload: CreateUserRequest): Promise<CreateUserResponse>;
}
