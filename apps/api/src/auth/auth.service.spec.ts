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
  let jwtService: JwtService;

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
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(jwtService).toBeDefined();
  });

  describe('login', () => {
    it('returns an access token', () => {
      expect(service.login(authUserDetails)).toEqual({
        access_token: 'access_token',
      });
      expect(jwtService.sign).toHaveBeenCalledWith({
        email: authUserDetails.email,
        sub: authUserDetails.id,
      });
    });
  });
});
