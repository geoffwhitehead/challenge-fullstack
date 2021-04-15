import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get('settings')
  async getSettings() {
    return this.appService.getSettings();
  }

  @UseGuards(JwtAuthGuard)
  @Post('settings')
  async postSettings() {
    // TODO
    return true;
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log(`req.user`, req.user);

    // If password validation through local strategy is successful the user details will be
    // appended onto the request.
    return this.authService.login(req.user);
  }
}
