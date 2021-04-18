import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserLoginResponse } from '@org/types';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AppService } from './app.service';
import { SettingsEntity } from './settings.entity';

@ApiTags('/')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService
  ) {}

  @Get('settings')
  @ApiResponse({
    status: 200,
    description: 'The global app settings',
    type: SettingsEntity,
  })
  async getSettings() {
    return this.appService.getSettings();
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 200,
    description: 'The updated global app settings',
    type: SettingsEntity,
  })
  @ApiBody({ type: SettingsEntity })
  @Post('settings')
  async updateSettings(@Body() settings: Omit<SettingsEntity, 'id'>) {
    return this.appService.updateSettings(settings);
  }

  @ApiResponse({
    status: 200,
    description: 'The JWT token',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req): Promise<UserLoginResponse> {
    // If password validation through local strategy is successful the user details will be
    // appended onto the request.
    return this.authService.login(req.user);
  }
}
