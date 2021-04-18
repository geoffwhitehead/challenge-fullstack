import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
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
  id: 456,
  mimetype: 'image/png',
  size: 1000,
  bucket: 'my-aws-bucket',
  key: 'folder/file.ext',
  location: 'https://my-bucket.s3.amazonaws.com/my-key',
};

const populatedTestUsers = [
  {
    ...testUsers[0],
    photo: testAsset,
  },
];

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
            find: jest.fn().mockResolvedValue(populatedTestUsers),
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
            get: jest.fn().mockImplementation((key: string) => {
              const conf = { s3Bucket: 'my-aws-bucket' };
              return conf[key];
            }),
          },
        },
        {
          provide: 'fs',
          useValue: {
            unlinkSync: jest.fn().mockResolvedValue(true),
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

  describe('getUsers', () => {
    it('should return an array of populated users', () => {
      const repoSpy = jest.spyOn(repo, 'find');
      expect(service.getUsers()).resolves.toEqual(populatedTestUsers);
      expect(repoSpy).toBeCalledTimes(1);
    });
  });

  describe('createUser', () => {
    it('should return a created user', async () => {
      const repoCreateSpy = jest.spyOn(repo, 'create');
      const repoSaveSpy = jest.spyOn(repo, 'save');

      await expect(
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

      await expect(assetsService.createAsset).toHaveBeenCalledWith({
        asset: testFile,
        cannedAcl: 'public-read',
        bucket: 'my-aws-bucket',
      });

      const { id, ...createUserProps } = testUsers[0];
      expect(repoCreateSpy).toBeCalledTimes(1);
      expect(repoCreateSpy).toBeCalledWith({
        ...createUserProps,
        photo: testAsset.id,
      });
      expect(repoSaveSpy).toHaveBeenCalledWith({
        ...createUserProps,
        id,
        photo: testAsset.id,
      });
    });
  });
});
