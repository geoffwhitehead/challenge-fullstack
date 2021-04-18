import { Test, TestingModule } from '@nestjs/testing';
import { AssetEntity } from '../assets/asset.entity';
import { UserEntity } from './user.entity';
import { UploadedFile, UsersController } from './users.controller';
import { UsersService } from './users.service';

const testUsers: UserEntity[] = [
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

const populatedTestUsers: UserEntity[] = [
  {
    ...testUsers[0],
    photo: testAsset,
  },
];

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            getUsers: jest
              .fn()
              .mockImplementation(() => Promise.resolve(populatedTestUsers)),
            createUser: jest
              .fn()
              .mockImplementation(() => Promise.resolve(testUsers[0])),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('returns an array of users', () => {
      expect(controller.getUsers()).resolves.toEqual(populatedTestUsers);
      expect(service.getUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('create user', () => {
    it('creates a user', () => {
      expect(controller.createUser(testFile, testUsers[0])).resolves.toEqual(
        testUsers[0]
      );
      expect(service.createUser).toHaveBeenCalledWith({
        photo: testFile,
        user: testUsers[0],
      });
    });
  });
});
