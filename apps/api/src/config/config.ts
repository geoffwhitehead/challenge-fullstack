import { ConfigFactory } from '@nestjs/config';

type Config = {
  port: number;
  jwtKey: string;
  dbUrl: string;
};

// defaults here for local development
export const config: ConfigFactory<Config> = () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  jwtKey: process.env.JWT_KEY || 'localSecretKey',
  dbUrl: process.env.DATABASE_URL || 'postgres://test:test@localhost:5432/test',
});
