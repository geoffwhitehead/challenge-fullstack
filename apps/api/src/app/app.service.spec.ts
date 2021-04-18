import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppService } from './app.service';
import { SettingsEntity } from './settings.entity';

const testSettings = new SettingsEntity();

describe('AppService', () => {
  let service: AppService;
  let repo: Repository<SettingsEntity>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getRepositoryToken(SettingsEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(testSettings),
            update: jest.fn().mockResolvedValue(true),
            save: jest.fn().mockResolvedValue(true),
            create: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    repo = module.get<Repository<SettingsEntity>>(
      getRepositoryToken(SettingsEntity)
    );
    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repo).toBeDefined();
  });

  describe('getSettings', () => {
    it('should return the global app settings', () => {
      const repoSpy = jest.spyOn(repo, 'findOne');
      expect(service.getSettings()).resolves.toEqual(testSettings);
      expect(repoSpy).toBeCalledTimes(1);
    });
  });

  describe('updateSettings', () => {
    it('should return the global app settings', async () => {
      const settings = await service.updateSettings({
        isUsersGridActive: true,
      });

      expect(settings).toEqual(testSettings);
      expect(repo.update).toBeCalledTimes(1);
      expect(repo.update).toBeCalledWith(
        { id: testSettings.id },
        { isUsersGridActive: true }
      );
    });
  });
});
