import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as fs from 'fs';
import { AssetsModule } from '../assets/assets.module';
import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AssetsModule],
  providers: [UsersService, { provide: 'fs', useFactory: () => fs }],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
