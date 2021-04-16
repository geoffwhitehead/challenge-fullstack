type Config = {
  apiUrl: string;
  environment: string;
};

export const config: Config = {
  apiUrl: process.env.NX_API_URL || 'http://localhost:3333',
  environment: process.env.NODE_ENV,
};
