import { Injectable } from '@nestjs/common';

type User = {
  id: string;
  name: string;
  email: string;
};

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      {
        id: '123',
        name: 'geoff whitehead',
        email: 'geoff1012@gmail.com',
      },
    ];
  }
}
