import { Provider } from '@nestjs/common';
import { UserTokens } from '../../../core/domain/user/di/user.tokens';
import { CreateNewUser } from '../../../core/domain/user/usecase/create-new-user';
import { UserRepository } from '../../../infrastructure/repository/user.repository';
import { PrismaClient } from '@prisma/client';

export const repository: Provider[] = [
  {
    provide: UserTokens.UserRepository,
    useFactory: (connection) => new UserRepository(connection),
    inject: [PrismaClient],
  },
];

export const useCases: Provider[] = [
  {
    provide: UserTokens.CreateNewUser,
    useFactory: (repository) => new CreateNewUser(repository),
    inject: [UserTokens.UserRepository],
  },
];

export const ports: Provider[] = [
  {
    provide: UserTokens.UserPort,
    useFactory: () => <any>{},
  },
];
