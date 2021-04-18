import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadedFile } from '../users/users.controller';
import { AssetEntity } from './asset.entity';
import { S3Service } from './s3.service';

type CreateAssetProps = {
  asset: UploadedFile;
  bucket: string;
  cannedAcl: string;
};
@Injectable()
export class AssetsService {
  constructor(
    private s3: S3Service,
    @InjectRepository(AssetEntity)
    private assetRepository: Repository<AssetEntity>
  ) {}

  async createAsset(props: CreateAssetProps): Promise<AssetEntity> {
    const { Key, Bucket, Location } = await this.s3.uploadAsset(props);

    const newAsset = await this.assetRepository.create({
      key: Key,
      bucket: Bucket,
      location: Location,
      mimetype: props.asset.mimetype,
      size: props.asset.size,
    });

    return this.assetRepository.save(newAsset);
  }
}
