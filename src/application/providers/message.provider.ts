import { Provider } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MessageTokens } from '@domain/message/di/message.tokens';
import { MessageRepository } from '@infrastructure/repository/message.repository';
import { CreateMessage } from '@domain/message/usecase/create-message';

export const repository: Provider[] = [
  {
    provide: MessageTokens.MessageRepositoryPort,
    useFactory: (connection) => new MessageRepository(connection),
    inject: [PrismaClient],
  },
];

export const useCases: Provider[] = [
  {
    provide: MessageTokens.CreateMessage,
    useFactory: (repository) => new CreateMessage(repository),
    inject: [MessageTokens.MessageRepositoryPort],
  },
];
