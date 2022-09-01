import { MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateUserArgs {
  @Field()
  @MinLength(3)
  name: string;
}
