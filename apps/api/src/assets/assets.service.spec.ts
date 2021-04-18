import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UploadedFile } from '../users/users.controller';
import { AssetEntity } from './asset.entity';
import { AssetsService } from './assets.service';
import { S3Service } from './s3.service';

const testFile: UploadedFile = {
  fieldname: 'qwe',
  originalname: 'qwe',
  encoding: 'qwe',
  mimetype: 'qwe',
  destination: 'qwe',
  filename: 'qwe',
  path: 'qwe',
  size: 123,
};

const testS3Response = {
  Key: 'folder/file.ext',
  Bucket: 'my-aws-bucket',
  Location: 'https://my-bucket.s3.amazonaws.com/my-key',
};

const testAssets: AssetEntity[] = [
  {
    id: 123,
    mimetype: testFile.mimetype,
    size: testFile.size,
    bucket: testS3Response.Bucket,
    key: testS3Response.Key,
    location: testS3Response.Location,
  },
];

describe('AssetsService', () => {
  let service: AssetsService;
  let s3Service: S3Service;
  let repo: Repository<AssetEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssetsService,
        {
          provide: getRepositoryToken(AssetEntity),
          useValue: {
            create: jest.fn().mockResolvedValue(testAssets[0]),
            save: jest.fn().mockResolvedValue(testAssets[0]),
          },
        },
        {
          provide: S3Service,
          useValue: {
            uploadAsset: jest.fn().mockResolvedValue(testS3Response),
          },
        },
      ],
    }).compile();

    service = module.get<AssetsService>(AssetsService);
    s3Service = module.get<S3Service>(S3Service);
    repo = module.get<Repository<AssetEntity>>(getRepositoryToken(AssetEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(s3Service).toBeDefined();
    expect(repo).toBeDefined();
  });

  describe('createAsset', () => {
    it('should return a created asset', async () => {
      const params = {
        asset: testFile,
        bucket: 'my-aws-bucket',
        cannedAcl: 'public-read',
      };

      await expect(service.createAsset(params)).resolves.toEqual(testAssets[0]);

      expect(s3Service.uploadAsset).toHaveBeenCalledWith(params);
      expect(s3Service.uploadAsset).toHaveBeenCalledTimes(1);

      const { id, ...unsavedAsset } = testAssets[0];

      expect(repo.create).toHaveBeenCalledWith(unsavedAsset);
      expect(repo.save).toHaveBeenCalledWith(testAssets[0]);
    });
  });
});
