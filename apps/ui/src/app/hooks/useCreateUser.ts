import { User, UserDto } from '@org/types';
import { useCallback } from 'react';
import { config } from '../../config';
import { useFetch } from './useFetch';

export const useCreateUser = () => {
  const { fetch, isLoading, hasErrored } = useFetch<User>();

  const postUser = useCallback(
    async (data: UserDto) => {
      const formData = new FormData();
      formData.append('photo', data.photo, data.photo.name);
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('phone', data.phone);
      formData.append('email', data.email);

      await fetch({
        url: `${config.apiUrl}/users`,
        opts: {
          method: 'POST',
          body: formData,
        },
      });
    },
    [fetch]
  );

  return { postUser, isLoading, hasErrored };
};
