import { Module } from '@nestjs/common';
import { MessageResolver } from '../api/resolver/message.resolver';
import { repository, useCases } from '@application/providers/message.provider';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [MessageResolver, ...repository, ...useCases, PrismaClient]
})
export class MessageModule {}
