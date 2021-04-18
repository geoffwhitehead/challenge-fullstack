import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AssetsModule } from '../assets/assets.module';
import { AuthModule } from '../auth/auth.module';
import { config, configValidator } from '../config/config';
import { DatabaseModule } from '../database/database.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsEntity } from './settings.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SettingsEntity]),
    UsersModule,
    AssetsModule,
    AuthModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      validationSchema: configValidator,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'ui'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
