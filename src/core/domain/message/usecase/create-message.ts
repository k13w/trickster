import { Result } from '../../../common/result';
import { MessageRepositoryPort } from '@domain/message/port/message-repository.port';

export class CreateMessage {
  constructor(private readonly repository: MessageRepositoryPort) {}

  async execute(data: any): Promise<Result<any>> {
    console.log("ola")
    return await this.repository.createMessage(data);
  }
}
