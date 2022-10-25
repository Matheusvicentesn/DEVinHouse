import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getAll(): string {
    return 'Hello World Users';
  }
}
