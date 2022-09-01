import { Result } from '../../core/common/result';
import { PrismaClientValidationError } from '@prisma/client/runtime';
import { PrismaService } from '@application/modules/prisma.service';
import { MessageRepositoryPort } from '@domain/message/port/message-repository.port';

export class MessageRepository implements MessageRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async createMessage(payload: any): Promise<Result<unknown>> {
    console.log("ai", payload)
    try {
      const message = await this.prisma.message.create({
        data: {
          userId: 1,
          body: payload.body
        },
      });

      console.log("opa", message)

      return message as any
    } catch (e) {
      if (e instanceof PrismaClientValidationError) {
      }
    }
  }
}
