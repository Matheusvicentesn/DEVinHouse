import { Module } from '@nestjs/common';
import { StringUtils } from 'src/utils/string-utils';
import { UsersController } from './users.controller';
import { UsersServices } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersServices, StringUtils],
})
export class UsersModule {}
