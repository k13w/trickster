import { Module } from '@nestjs/common';
import { MessageResolver } from '../api/resolver/message.resolver';
import { repository, useCases } from '@application/providers/message.provider';

@Module({
  providers: [MessageResolver, ...repository, ...useCases]
})
export class MessageModule {}
