import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('users')
  @UseInterceptors(FileInterceptor('photo', { dest: './uploads' }))
  createUser(@UploadedFile() file) {
    console.log(`file`, file);
    return this.appService.createUser(file);
  }
}
