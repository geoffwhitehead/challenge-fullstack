type Config = {
  baseUrl: string;
  environment: string;
};

export const config: Config = {
  baseUrl: process.env.HOST || 'http://localhost:3333',
  environment: process.env.NODE_ENV,
};
