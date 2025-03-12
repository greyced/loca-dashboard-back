import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/models/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('login')
  login(
    @Query('mail') mail: string,
    @Query('password') password: string,
  ): User | undefined {
    return this.userService.getUser(mail, password);
  }
}
