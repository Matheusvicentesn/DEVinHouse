import { Injectable } from '@nestjs/common';
import { StringUtils } from 'src/utils/string-utils';
import { User } from './user.entity';
@Injectable()
export class UsersServices {
  private users: Array<User> = [];
  constructor(private stringUtils: StringUtils) {}
  public create(user: User) {
    // user.name = this.stringUtils.toUppserCase(user.name);
    user.createdDate = new Date();
    this.users.push(user);
    return user;
  }

  public getUsers() {
    return this.users;
  }
}
