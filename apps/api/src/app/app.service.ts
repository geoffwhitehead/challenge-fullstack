import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { omit } from 'lodash';
import { Repository } from 'typeorm';
import { SettingsEntity } from './settings.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(SettingsEntity)
    private settingsRepository: Repository<SettingsEntity>
  ) {}

  async getSettings(): Promise<Omit<SettingsEntity, 'id'>> {
    const globalSettings = await this.settingsRepository.findOne();

    if (!globalSettings) {
      const newGlobalSettings = this.settingsRepository.create();
      return omit(await this.settingsRepository.save(newGlobalSettings), 'id');
    } else {
      return omit(globalSettings, 'id');
    }
  }

  async updateSettings(
    settings: Omit<SettingsEntity, 'id'>
  ): Promise<Omit<SettingsEntity, 'id'>> {
    const globalSettings = await this.settingsRepository.findOne();

    if (!globalSettings) {
      const newGlobalSettings = this.settingsRepository.create({
        ...settings,
      });
      return omit(await this.settingsRepository.save(newGlobalSettings), 'id');
    } else {
      await this.settingsRepository.update(
        { id: globalSettings.id },
        { ...globalSettings, ...settings }
      );

      const updated = await this.settingsRepository.findOne();

      return omit(updated, 'id');
    }
  }
}
