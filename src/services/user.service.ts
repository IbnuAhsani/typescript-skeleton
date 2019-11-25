import UserModel from "../models/user.model";

export default class UserService {
  private async Signup(user: object): Promise<object> {
    const userRecord: object = await UserModel.create(user);

    return { user: userRecord };
  }
}
