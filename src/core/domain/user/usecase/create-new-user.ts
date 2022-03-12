import { CreateUserRequest } from '../interface/create-user.interface';
import { UserPort } from '../port/user.port';

export class CreateNewUser {
  constructor(private readonly repository: UserPort) {}

  execute(data: CreateUserRequest) {
    return this.repository.newVirtualCard(data);
  }
}
