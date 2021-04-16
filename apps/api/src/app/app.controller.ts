import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Settings } from '@org/types';
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
  async postSettings(@Body() settings: Settings) {
    return this.appService.updateSettings(settings);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // If password validation through local strategy is successful the user details will be
    // appended onto the request.
    return this.authService.login(req.user);
  }
}
