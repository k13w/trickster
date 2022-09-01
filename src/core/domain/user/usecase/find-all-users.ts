import { UserRepositoryPort } from '../port/user-repository.port';
import { Result } from '../../../common/result';

export class FindAllUsers {
  constructor(private readonly repository: UserRepositoryPort) {}

  async execute(): Promise<Result<any>> {
    return await this.repository.findAllUsers();
  }
}
