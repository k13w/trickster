import { Result } from '@domain/shared/result';

export interface UserRepositoryPort {
  createUser(payload: any): Promise<Result<unknown>>;
}
