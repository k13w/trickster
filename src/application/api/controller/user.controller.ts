import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserTokens } from '@domain/user/di/user.tokens';
import { CreateNewUser } from '@domain/user/usecase/create-new-user';
import { User } from "@prisma/client";
import { Result } from '@domain/shared/result';

@Controller('user')
export class UserController {

  constructor(
    @Inject(UserTokens.CreateNewUser)
    private createNewUserUseCase: CreateNewUser,
  ) {}

  @Post('create-user')
  async createNewUser(@Body() data: any): Promise<Result<unknown>>{
    // @ts-ignore
    const userOrError: Result<User> = this.createNewUserUseCase.execute(data)

    console.log("error", await userOrError)

    if (userOrError.failure) {
      console.log("falha")
      return Result.fail(userOrError.error)
    }
  }
}
