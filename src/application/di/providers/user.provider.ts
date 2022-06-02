import { Provider } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';
import { UserRepository } from '@infrastructure/repository/user.repository';
import { PrismaClient } from '@prisma/client';

export const repository: Provider[] = [
  {
    provide: UserTokens.UserRepositoryPort,
    useFactory: (connection) => new UserRepository(connection),
    inject: [PrismaClient],
  },
];

export const useCases: Provider[] = [
  {
    provide: UserTokens.CreateNewUser,
    useFactory: (repository) => new CreateNewUser(repository),
    inject: [UserTokens.UserRepositoryPort],
  },
];
