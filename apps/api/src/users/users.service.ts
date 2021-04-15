import { Injectable } from '@nestjs/common';
import { User } from '@org/types';
@Injectable()
export class UsersService {
  getUsers(): User[] {
    return [
      {
        firstName: 'geoff',
        lastName: 'whitehead',
        email: 'geoff1012@gmail.com',
        phone: '1233454567',
        photo: `test.png`,
      },
    ];
  }

  createUser(user: User) {
    console.log(`user`, user);
    return true;
  }
}
