import { Settings } from '@org/types';
import { useCallback, useEffect, useState } from 'react';
import { config } from '../../config';
import { useFetch } from './useFetch';

export const useGetSettings = () => {
  const [settings, setValue] = useState<Settings>();
  const { fetch, isLoading, hasErrored } = useFetch<Settings>();

  useEffect(() => {
    const fetchData = async () => {
      const { body } = await fetch({
        url: `${config.apiUrl}/settings`,
      });
      if (body) setValue(body);
    };

    fetchData();
  }, []);

  const setSettings = useCallback((settings) => setValue(settings), [setValue]);

  return { settings, setSettings, isLoading, hasErrored };
};
