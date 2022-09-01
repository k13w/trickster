import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field(() => String, { description: 'Body your message' })
  body: string;
}
