import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateMessageInput } from '../../../core/domain/message/dto/create-message.input';
import { UpdateMessageInput } from '../../../core/domain/message/dto/update-message.input';
import { Message } from '@domain/message/entity/message';
import { CreateMessage } from '@domain/message/usecase/create-message';
import { Inject } from '@nestjs/common';
import { MessageTokens } from '@domain/message/di/message.tokens';

@Resolver(() => Message)
export class MessageResolver {
  constructor(
    @Inject(MessageTokens.CreateMessage)
    private readonly createMessageUseCase: CreateMessage
  ) {}

  @Mutation(() => Message)
  createMessage(@Args('createMessageInput') createMessageInput: CreateMessageInput) {
    return this.createMessageUseCase.execute(createMessageInput);
  }

  // @Query(() => [Message], { name: 'message' })
  // findAll() {
  //   return this.messageService.findAll();
  // }
  //
  // @Query(() => Message, { name: 'message' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.messageService.findOne(id);
  // }
  //
  // @Mutation(() => Message)
  // updateMessage(@Args('updateMessageInput') updateMessageInput: UpdateMessageInput) {
  //   return this.messageService.update(updateMessageInput.id, updateMessageInput);
  // }
  //
  // @Mutation(() => Message)
  // removeMessage(@Args('id', { type: () => Int }) id: number) {
  //   return this.messageService.remove(id);
  // }
}
