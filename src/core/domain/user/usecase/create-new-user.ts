import {
  CreateUserRequest,
  CreateUserResponse,
} from '../interface/create-user.interface';
import { UserPort } from '../port/user.port';

export class CreateNewUser {
  constructor(private readonly repository: UserPort) {}

  async execute(data: CreateUserRequest): Promise<CreateUserResponse> {
    console.log('domain');
    return this.repository.createUser(data);
  }
}
