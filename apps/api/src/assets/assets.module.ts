import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEntity } from './asset.entity';
import { AssetsService } from './assets.service';
import { S3Service } from './s3.service';

@Module({
  imports: [TypeOrmModule.forFeature([AssetEntity])],
  providers: [AssetsService, S3Service],
  exports: [AssetsService],
})
export class AssetsModule {}
