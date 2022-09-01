import { Module } from '@nestjs/common';
import { repository, useCases } from '../providers/user.provider';
import { UserResolver } from '@application/api/resolver/user.resolver';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [],
  providers: [UserResolver, ...repository, ...useCases, PrismaClient],
})
export class UserModule {}
