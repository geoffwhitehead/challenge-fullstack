import { UserDto } from '@org/types';
import { useState } from 'react';
import { config } from '../config';

export const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const postUser = async (data: UserDto) => {
    setIsLoading(true);
    setHasErrored(false);

    let formData = new FormData();
    formData.append('photo', data.photo, data.photo.name);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);

    const response = await fetch(`${config.baseUrl}/users`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      setHasErrored(true);
    }
    setIsLoading(false);
  };

  return [postUser, isLoading, hasErrored] as const;
};
