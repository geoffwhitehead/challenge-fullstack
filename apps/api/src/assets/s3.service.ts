import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import * as Fs from 'fs';
import { UploadedFile } from '../users/users.controller';

type UploadAssetProps = {
  asset: UploadedFile;
  bucket: string;
  cannedAcl: string;
};

@Injectable()
export class S3Service {
  private client: S3;

  constructor(private configService: ConfigService, private fs: typeof Fs) {
    this.client = new S3({
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
      data = await this.fs.readFileSync(asset.path);
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

    return this.client.upload(params).promise();
  }
}
