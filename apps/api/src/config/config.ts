import { ConfigFactory } from '@nestjs/config';

type Config = {
  port: number;
  jwtKey: string;
  dbHost: string;
  dbUser: string;
  dbPort: number;
  dbPassword: string;
  dbName: string;
};

// defaults here for local development
export const config: ConfigFactory<Config> = () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  jwtKey: process.env.JWT_KEY || 'localSecretKey',
  dbPort: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  dbHost: process.env.POSTGRES_HOST || 'localhost',
  dbUser: process.env.POSTGRES_USER || 'test',
  dbPassword: process.env.POSTGRES_PASSWORD || 'test',
  dbName: process.env.POSTGRES_DB || 'test',
});
