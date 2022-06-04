import { CreateUserRequest, User } from '../interface/create-user.interface';
import { UserRepositoryPort } from '../port/user-repository.port';
import {Result} from "@domain/shared/result";

export class CreateNewUser {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(data: CreateUserRequest): Promise<Result<User>> {
    if (Object.keys(data).length === 0) {
      return Result.fail('dados invalidos')
    }

    return Result.ok()
  }
}
