import { Result } from '../../../common/result';

export interface UserRepositoryPort {
  createUser(payload: any): Promise<Result<unknown>>;
  findAllUsers(): Promise<Result<unknown>>;
}
