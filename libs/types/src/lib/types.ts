export type Settings = {
  id?: string;
  isUsersGridActive: boolean;
};

export type User = {
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
