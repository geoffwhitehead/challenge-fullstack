import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserDto } from '@org/types';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { AssetsService } from '../assets/assets.service';
import { UserEntity } from './user.entity';
import { UploadedFile } from './users.controller';

type CreateUserParams = {
  user: Omit<UserDto, 'photo'>;
  photo: UploadedFile;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<User>,
    private assetsService: AssetsService,
    private configService: ConfigService
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['photo'] });
  }

  async createUser({ user, photo }: CreateUserParams): Promise<User> {
    const asset = await this.assetsService.createAsset({
      asset: photo,
      cannedAcl: 'public-read',
      bucket: this.configService.get('s3Bucket'),
    });

    const newUser = await this.usersRepository.create({
      ...user,
      photo: asset.id,
    });

    /**
     * Remove the uploaded file
     * Note: Another option here would be to use multer-s3 in the controller
     * to upload the file directly to aws, skipping this step entirely.
     */

    await fs.unlinkSync(photo.path);
    return this.usersRepository.save(newUser);
  }
}
