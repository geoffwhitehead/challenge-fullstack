import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserDto } from '@org/types';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UsersService } from './users.service';

const FILE_SIZE = 1000000 * 3; // in bytes;
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: 'uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      limits: { fileSize: FILE_SIZE },
      fileFilter: (req, file, cb) =>
        cb(null, SUPPORTED_FORMATS.includes(file.mimetype)),
    })
  )
  async createUser(@UploadedFile() file, @Body() user: Omit<UserDto, 'photo'>) {
    // TODO: save all file info in asset record
    return this.userService.createUser({ photo: file.filename, ...user });
  }

  @Get('photo/:imgId')
  test(@Param('imgId') imgId, @Res() res) {
    const imgPath = imgId;
    return res.sendFile(imgPath, { root: 'uploads' });
  }
}
