import { ConfigFactory } from '@nestjs/config';
import * as Joi from 'joi';

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
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10),
  jwtKey: process.env.JWT_KEY,
  dbUrl: process.env.DATABASE_URL,
  dbSsl: process.env.DB_SSL === 'true' ? true : false,
  awsAccessKey: process.env.AWS_ACCESS_KEY,
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  s3Bucket: process.env.S3_BUCKET,
});

export const configValidator = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  PORT: Joi.number().default(3333),
  DATABASE_URL: Joi.string().default(
    'postgres://test:test@localhost:5432/test'
  ),
  DB_SSL: Joi.string(),
  JWT_KEY: Joi.string().required(),
  AWS_ACCESS_KEY: Joi.string().required(),
  AWS_SECRET_ACCESS_KEY: Joi.string().required(),
  S3_BUCKET: Joi.string().required(),
});
