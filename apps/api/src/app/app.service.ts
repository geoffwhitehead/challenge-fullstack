import { Injectable } from '@nestjs/common';

type Settings = {
  users: {
    active: boolean;
  };
};

@Injectable()
export class AppService {
  /**Some of these routes could be seperated in their own modules */
  getSettings(): Settings {
    return {
      users: {
        active: true,
      },
    };
  }
}
