export type Settings = {
  id?: string;
  isUsersGridActive: boolean;
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
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
