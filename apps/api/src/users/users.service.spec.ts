import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConfigService } from 'aws-sdk';
import { Repository } from 'typeorm';
import { AssetEntity } from '../assets/asset.entity';
import { AssetsService } from '../assets/assets.service';
import { UserEntity } from './user.entity';
import { UploadedFile } from './users.controller';
import { UsersService } from './users.service';

const testUsers = [
  {
    id: 123,
    firstName: 'Peter',
    lastName: 'Griffin',
    email: 'petergriffin@familyguy.com',
    phone: '123123123',
    photo: 456,
  },
];

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

const testAsset: AssetEntity = {
  id: 123,
  mimetype: 'image/png',
  size: 1000,
  bucket: 'my-aws-bucket',
  key: 'folder/file.ext',
  location: 'https://my-bucket.s3.amazonaws.com/my-key',
};

describe('UsersService', () => {
  let service: UsersService;
  let assetsService: AssetsService;
  let configService: ConfigService;
  let repo: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            find: jest.fn().mockResolvedValue(testUsers),
            create: jest.fn().mockResolvedValue(testUsers[0]),
            save: jest.fn().mockResolvedValue(testUsers[0]),
          },
        },
        {
          provide: AssetsService,
          useValue: {
            createAsset: jest.fn().mockResolvedValue(testAsset),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            s3Bucket: 'my-aws-bucket',
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    assetsService = module.get<AssetsService>(AssetsService);
    configService = module.get<ConfigService>(ConfigService);
    repo = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(assetsService).toBeDefined();
    expect(configService).toBeDefined();
    expect(repo).toBeDefined();
  });

  describe('createUser', () => {
    it('should return a created user', async () => {
      expect(
        service.createUser({
          user: {
            firstName: 'Peter',
            lastName: 'Griffin',
            email: 'petergriffin@familyguy.com',
            phone: '123123123',
          },
          photo: testFile,
        })
      ).resolves.toEqual(testUsers[0]);

      expect(assetsService.createAsset).toHaveBeenCalledWith({
        asset: testFile,
        cannedAcl: 'public-read',
        bucket: 'my-aws-bucket',
      });
      expect(repo.create).toBeCalledTimes(1);
      expect(repo.create).toHaveBeenCalledWith({
        ...testUsers[0],
        photo: testAsset.id,
      });
      expect(repo.save).toHaveBeenCalledWith({
        ...testUsers[0],
        photo: testAsset.id,
      });
    });
  });
});
