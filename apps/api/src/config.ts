type Config = {
  port: number;
  jwtKey: string;
};

export const config: Config = {
  port: parseInt(process.env.PORT, 10) || 3333,
  jwtKey: process.env.JWT_KEY || 'localSecretKey', // default here should be removed - put here for convenience
};
