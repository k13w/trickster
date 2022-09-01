import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field((_type) => ID)
  id: string;

  @Field({ description: 'message body' })
  body: string;
}
