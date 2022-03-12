import { CreateUserRequest, User } from '../interface/create-user.interface';
import { UserRepositoryPort } from '../port/user-repository.port';

export class CreateNewUser {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(data: CreateUserRequest): Promise<User> {
    return this.repository.createUser(data);
  }
}
