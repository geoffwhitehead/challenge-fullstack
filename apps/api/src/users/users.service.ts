import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from '@org/types';
import * as Fs from 'fs';
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
    private usersRepository: Repository<UserEntity>,
    private assetsService: AssetsService,
    private configService: ConfigService,
    @Inject('fs') private fs: typeof Fs
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find({ relations: ['photo'] });
  }

  async createUser({ user, photo }: CreateUserParams): Promise<UserEntity> {
    const asset = await this.assetsService.createAsset({
      asset: photo,
      cannedAcl: 'public-read',
      bucket: this.configService.get('s3Bucket'),
    });

    const newUser = this.usersRepository.create({
      ...user,
      photo: asset.id,
    });

    /**
     * Remove the uploaded file
     * Note: Another option here would be to use multer-s3 in the controller
     * to upload the file directly to aws, skipping this step entirely.
     */
    await this.fs.unlinkSync(photo.path);
    return this.usersRepository.save(newUser);
  }
}
