import React, { useEffect, useState } from 'react';
import { config } from '../config';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data');
      console.log(`${config.baseUrl}/users`);
      setIsLoading(true);
      const response = await fetch(`${config.baseUrl}/users`);
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
  return [users, isLoading, hasErrored] as const;
};
