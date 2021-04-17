import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { S3 } from 'aws-sdk';
import * as fs from 'fs';
import { Repository } from 'typeorm';
import { UploadedFile } from '../users/users.controller';
import { AssetEntity } from './asset.entity';

type CreateAssetProps = {
  asset: UploadedFile;
  bucket: string;
  cannedAcl: string;
};

type UploadAssetProps = {
  asset: UploadedFile;
  bucket: string;
  cannedAcl: string;
};

@Injectable()
export class AssetsService {
  private s3: S3;
  constructor(
    private configService: ConfigService,
    @InjectRepository(AssetEntity)
    private assetRepository: Repository<AssetEntity>
  ) {
    this.s3 = new S3({
      accessKeyId: this.configService.get('awsAccessKey'),
      secretAccessKey: this.configService.get('awsSecretAccessKey'),
    });
  }

  async uploadAsset({
    asset,
    bucket,
    cannedAcl,
  }: UploadAssetProps): Promise<S3.ManagedUpload.SendData> {
    let data: Buffer;
    try {
      data = await fs.readFileSync(asset.path);
    } catch (e) {
      console.error(e);
    }

    const params: S3.PutObjectRequest = {
      Bucket: bucket,
      Key: asset.filename,
      Body: data,
      ACL: cannedAcl,
      ContentType: asset.mimetype,
    };

    return this.s3.upload(params).promise();
  }

  async createAsset(props: CreateAssetProps): Promise<AssetEntity> {
    const { Key, Bucket, Location } = await this.uploadAsset(props);

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
