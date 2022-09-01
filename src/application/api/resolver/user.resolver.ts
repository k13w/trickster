import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { User } from '@domain/user/entity/user';
import { UpdateUserInput } from '@domain/user/dto/update-user.input';
import { CreateUserInput } from '@domain/user/dto/create-user.input';
import { Inject } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';
import { FindAllUsers } from '@domain/user/usecase/find-all-users';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @Inject(UserTokens.CreateUser)
    private createNewUserUseCase: CreateNewUser,

    @Inject(UserTokens.FindAllUsers)
    private findAllUsersUseCase: FindAllUsers,
  ) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.createNewUserUseCase.execute(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  // @Query(() => User, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.findOne(id);
  // }
  //
  // @Mutation(() => User)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.userService.update(updateUserInput.id, updateUserInput);
  // }
  //
  // @Mutation(() => User)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.userService.remove(id);
  // }
}
