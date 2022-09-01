import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@domain/user/entity/user';
import { Inject } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';
import { CreateUserArgs } from '@application/api/resolver/dto/create-user.args';

@Resolver(of => User)
export class UserResolver {
  constructor(
    @Inject(UserTokens.CreateNewUser)
    private createNewUserUseCase: CreateNewUser,
  ) {}

  private data: User[] = []

  @Query(() => [User])
  sayHello() {
    return this.data
  }

  @Mutation(() => User, )
  createUser(@Args() data: CreateUserArgs) {
    return this.createNewUserUseCase.execute(data)
  }
}
