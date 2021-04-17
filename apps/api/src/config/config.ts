import { ConfigFactory } from '@nestjs/config';

type Config = {
  nodeEnv: string;
  port: number;
  jwtKey: string;
  dbUrl: string;
  dbSsl: boolean;
  awsAccessKey: string;
  awsSecretAccessKey: string;
  s3Bucket: string;
};

// defaults here for local development
export const config: ConfigFactory<Config> = () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3333,
  jwtKey: process.env.JWT_KEY || 'localSecretKey',
  dbUrl: process.env.DATABASE_URL || 'postgres://test:test@localhost:5432/test',
  dbSsl: process.env.DB_SSL === 'true' ? true : false,
  awsAccessKey: process.env.AWS_ACCESS_KEY,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  s3Bucket: process.env.S3_BUCKET,
});
