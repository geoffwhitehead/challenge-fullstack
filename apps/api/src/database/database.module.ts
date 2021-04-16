import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { parse } from 'pg-connection-string';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConf = parse(configService.get('dbUrl'));

        return {
          type: 'postgres',
          host: dbConf.host,
          port: parseInt(dbConf.port, 10),
          username: dbConf.user,
          password: dbConf.password,
          database: dbConf.database,
          synchronize: true,
          autoLoadEntities: true,
          ssl: {
            rejectUnauthorized: false,
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
