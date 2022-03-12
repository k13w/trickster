export class UserTokens {
  // use cases
  public static readonly CreateNewUser: unique symbol = Symbol('CreateNewUser');

  // ports
  public static readonly UserPort: unique symbol = Symbol('UserPort');

  // repository
  public static readonly UserRepository: unique symbol =
    Symbol('UserRepository');
}
