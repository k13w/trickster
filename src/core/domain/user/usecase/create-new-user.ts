import { CreateUserRequest } from '../interface/create-user.interface';
import { UserRepositoryPort } from '../port/user-repository.port';
import { Result } from '@domain/shared/result';

export class CreateNewUser {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(data: CreateUserRequest): Promise<Result<CreateUserRequest>> {
    if (Object.keys(data).length === 0) {
      return Result.fail(
        'Nenhum dado foi informado, por favor preencha os campos',
      );
    }

    const createUser = await this.repository.createUser(data);

    console.log("create user", createUser)

    if (createUser.failure) {
      console.log("falha")
    }
  }
}
