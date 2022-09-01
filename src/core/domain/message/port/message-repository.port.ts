import { Result } from '../../../common/result';

export interface MessageRepositoryPort {
  createMessage(payload: any): Promise<Result<unknown>>;
}
