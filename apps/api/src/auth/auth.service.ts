import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

type AuthUserProps = {
  id: string;
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
};

export type JWTPayload = {
  email: string;
  sub: string;
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  private readonly authUsers: AuthUserProps[] = [
    {
      id: '1',
      email: 'user@test.com',
      password: 'Password1!', // This would be hashed in the db using something like bcrypt or argon2
    },
  ];

  async validateUser(
    email: string,
    password: string
  ): Promise<AuthUserProps | false> {
    // TODO: Here you would check the user details against a record in the db.
    const user = this.authUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      return user;
    }
    return false;
  }

  login(user: AuthUserProps): LoginResponse {
    const payload: JWTPayload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
