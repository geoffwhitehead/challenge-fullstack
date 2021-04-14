import { Injectable } from '@nestjs/common';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo?: File;
};

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      {
        firstName: 'geoff',
        lastName: 'whitehead',
        email: 'geoff1012@gmail.com',
        phone: '1233454567',
      },
    ];
  }

  createUser(user: User) {
    console.log(`user`, user);
    return true;
  }
}
