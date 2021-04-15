export type Settings = {
  users: {
    isActive: boolean;
  };
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo?: File;
};

export type UserLoginProps = {
  email: string;
  password: string;
};
