import { User } from './../models/User.entity';
import { UserDto } from './../dto/user.dto';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async createUser(@Body() user: UserDto): Promise<User> {
    return await this.userService.create(user);
  }
  @Get()
  async getUsers(): Promise<User[]> {
    const users: User[] = await this.userService.getAll();
    return users;
  }
  @Get(':id')
  async getUser(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 422 })) id: number,
  ): Promise<User> {
    return await this.userService.getOne(id);
  }
  @Delete(':id')
  async deleteUser(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: 422 })) id: number,
  ): Promise<void> {
    return await this.userService.deleteOne(id);
  }
}
