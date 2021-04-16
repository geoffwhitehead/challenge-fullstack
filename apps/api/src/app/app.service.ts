import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from '@org/types';
import { omit } from 'lodash';
import { Repository } from 'typeorm';
import { SettingsEntity } from './settings.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(SettingsEntity)
    private settingsRepository: Repository<Settings>
  ) {}

  async getSettings(): Promise<Settings> {
    const globalSettings = await this.settingsRepository.findOne();

    if (!globalSettings) {
      const newGlobalSettings = this.settingsRepository.create();
      return omit(await this.settingsRepository.save(newGlobalSettings), 'id');
    } else {
      return omit(globalSettings, 'id');
    }
  }

  async updateSettings(settings: Partial<Settings>): Promise<Settings> {
    const globalSettings = await this.settingsRepository.findOne();

    console.log(`globalRecord`, globalSettings);
    console.log(`settings`, settings);

    if (!globalSettings) {
      const newGlobalSettings = this.settingsRepository.create({
        ...settings,
      });
      return omit(await this.settingsRepository.save(newGlobalSettings), 'id');
    } else {
      // TODO: possible to combine update and return into single op?
      await this.settingsRepository.update(
        { id: globalSettings.id },
        { ...globalSettings, ...settings }
      );

      const updated = await this.settingsRepository.findOne();

      console.log(`updated`, updated);
      return omit(updated, 'id');
    }
  }
}
