import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User, UserDto } from '@org/types';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

const MAX_FILE_SIZE = 1000000 * 3; // in bytes;
const SUPPORTED_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

export type UploadedFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
};

@ApiTags('/users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({
    status: 200,
    description: 'Array of users',
    type: UserEntity,
  })
  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({ type: UserEntity })
  @ApiResponse({
    status: 200,
    description: 'The created user',
    type: UserEntity,
  })
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
      limits: { fileSize: MAX_FILE_SIZE },
      fileFilter: (req, file, cb) =>
        cb(null, SUPPORTED_FORMATS.includes(file.mimetype)),
    })
  )
  async createUser(
    @UploadedFile() file: UploadedFile,
    @Body() user: Omit<UserDto, 'photo'>
  ) {
    return this.userService.createUser({ photo: file, user: user });
  }
}
