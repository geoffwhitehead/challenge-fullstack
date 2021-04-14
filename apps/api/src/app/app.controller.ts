import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

type CreateUserProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: File;
};
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  async getUsers() {
    return this.appService.getUsers();
  }

  @Post('users')
  @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
  async createUser(@UploadedFile() file, @Body() user: CreateUserProps) {
    console.log(`file`, file);
    console.log(`user`, user);
    return this.appService.createUser({ photo: file, ...user });
  }
}
