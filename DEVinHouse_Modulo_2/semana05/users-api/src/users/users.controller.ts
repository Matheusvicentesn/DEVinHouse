import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersServices) {}
  @Get()
  public getAll(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  public create(@Body() user: User): User {
    this.userService.create(user);
    return user;
  }
}
