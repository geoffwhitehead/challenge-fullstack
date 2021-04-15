import { UserLoginProps } from '@org/types';
import { useState } from 'react';
import { config } from '../config';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const login = async (data: UserLoginProps) => {
    setIsLoading(true);
    setHasErrored(false);

    let formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    const response = await fetch(`${config.baseUrl}/users`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      setHasErrored(true);
    }
    setIsLoading(false);
  };

  return [login, isLoading, hasErrored] as const;
};
