import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@domain/user/entity/user';
import { Inject } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';

@Resolver()
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

  @Mutation(() => User)
  createUser(@Args('name') name: string) {
    return this.createNewUserUseCase.execute(name)
  }
}
