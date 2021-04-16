import { User } from '@org/types';
import { useEffect, useState } from 'react';
import { config } from '../config';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${config.apiUrl}/users`);
      const result = await response.json();
      if (response.ok) {
        setUsers(result);
      } else {
        setHasErrored(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [setUsers, setIsLoading]);
  return { users, isLoading, hasErrored };
};
