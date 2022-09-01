import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Message } from '@domain/message/entity/message';

@ObjectType()
export class User {
  @Field(_type => ID)
  id: string

  @Field({ description: 'Name user' })
  name: string

  @Field(type => [Message])
  messages: Message[];
}
