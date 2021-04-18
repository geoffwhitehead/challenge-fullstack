import { Test } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsEntity } from './settings.entity';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let authService: AuthService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getSettings: jest
              .fn()
              .mockImplementation(() =>
                Promise.resolve({ isUsersGridActive: true })
              ),
            updateSettings: jest
              .fn()
              .mockImplementation((settings: SettingsEntity) =>
                Promise.resolve(settings)
              ),
          },
        },
        {
          provide: AuthService,
          useValue: {
            login: jest
              .fn()
              .mockImplementation(() =>
                Promise.resolve({ access_token: 'token' })
              ),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
    expect(appService).toBeDefined();
    expect(authService).toBeDefined();
  });

  describe('getSettings', () => {
    it('returns the global app settings', () => {
      expect(appController.getSettings()).resolves.toEqual({
        isUsersGridActive: true,
      });
    });
  });

  describe('postSettings', () => {
    it('returns the updated app settings', () => {
      expect(
        appController.updateSettings({ isUsersGridActive: true })
      ).resolves.toEqual({ isUsersGridActive: true });
    });
  });

  describe('login', () => {
    it('returns an access token on successful login', () => {
      expect(
        appController.login({ email: 'validEmail', sub: 123 })
      ).resolves.toEqual({
        access_token: 'token',
      });
    });
  });
});
