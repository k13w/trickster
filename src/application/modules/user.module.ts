import { Module } from '@nestjs/common';
import { UserController } from '../api/controller/user.controller';
import { repository, useCases } from '../di/providers/user.provider';
import { PrismaClient } from '@prisma/client';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [...repository, ...useCases, PrismaClient],
})
export class UserModule {}
