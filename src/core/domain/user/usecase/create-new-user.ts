import {
  CreateUserRequest,
  CreateUserResponse,
} from '../interface/create-user.interface';
import { UserRepositoryPort } from '../port/user.port';

export class CreateNewUser {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(data: CreateUserRequest): Promise<CreateUserResponse> {
    return this.repository.createUser(data);
  }
}
