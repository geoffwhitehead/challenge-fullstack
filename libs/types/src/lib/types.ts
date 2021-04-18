export type Settings = {
  id?: number;
  isUsersGridActive: boolean;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: number | Asset;
};

export type Asset = {
  id: number;
  mimetype: string;
  size: number;
  bucket: string;
  key: string;
  location: string;
};

export type UserDto = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: File;
};

export type UserLoginDto = {
  email: string;
  password: string;
};

export type UserLoginResponse = {
  access_token: string;
};
