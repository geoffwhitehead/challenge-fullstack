import { User } from '@org/types';
import { useEffect, useState } from 'react';
import { config } from '../../config';
import { useFetch } from './useFetch';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { fetch, isLoading, hasErrored } = useFetch<User[]>();

  useEffect(() => {
    const fetchData = async () => {
      const { body } = await fetch({
        url: `${config.apiUrl}/users`,
      });
      if (body) setUsers(body);
    };

    fetchData();
  }, [fetch, setUsers]);

  return { users, isLoading, hasErrored };
};
