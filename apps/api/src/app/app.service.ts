import { Injectable } from '@nestjs/common';
import { Settings } from '@org/types';

@Injectable()
export class AppService {
  getSettings(): Settings {
    return {
      users: {
        isActive: true,
      },
    };
  }
}
