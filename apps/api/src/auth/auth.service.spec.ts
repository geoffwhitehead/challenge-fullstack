import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

const authUserDetails = {
  id: '123',
  email: 'test@test.com',
  password: 'superSecret1!',
};
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockImplementation(() => 'access_token'),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('returns an access token', () => {
      expect(service.login(authUserDetails)).toEqual({
        access_token: 'access_token',
      });
      expect(service.login).toHaveBeenCalledTimes(1);
    });
  });
});
