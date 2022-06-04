import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';
import { User } from "@prisma/client";
import { CreateUserRequest } from "@domain/user/interface/create-user.interface";

@Controller('user')
export class UserController {
  constructor(
    @Inject(UserTokens.CreateNewUser)
    private createNewUserUseCase: CreateNewUser,
  ) {}

  @Post('create-user')
  createNewUser(@Body() data: CreateUserRequest): Promise<User> {
    console.log("data", data)
    // @ts-ignore
    return this.createNewUserUseCase.execute(data);
  }
}
