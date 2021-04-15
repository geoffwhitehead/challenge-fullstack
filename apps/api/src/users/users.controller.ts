import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
  async createUser(@UploadedFile() file, @Body() user: User) {
    console.log(`file`, file);
    console.log(`user`, user);
    return this.userService.createUser({ photo: file, ...user });
  }
}
