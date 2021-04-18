import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
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

const testFile = {
  fieldname: 'qwe',
  originalname: 'qwe',
  encoding: 'qwe',
  mimetype: 'qwe',
  destination: 'qwe',
  filename: 'qwe',
  path: 'qwe',
  size: 123,
};

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
              .mockImplementation(() => Promise.resolve(testUsers)),
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
      expect(controller.getUsers()).resolves.toEqual(testUsers);
      expect(service.getUsers).toHaveBeenCalledTimes(1);
    });
  });

  describe('getUsers', () => {
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
