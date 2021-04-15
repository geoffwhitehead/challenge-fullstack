import { Settings } from '@org/types';
import { useEffect, useState } from 'react';
import { config } from '../config';

export const useGetSettings = () => {
  const [settings, setSettings] = useState<Settings>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${config.baseUrl}/settings`);
      const result = await response.json();
      if (response.ok) {
        setSettings(result);
      } else {
        setHasErrored(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [setSettings, setIsLoading, setHasErrored]);
  return { settings, setSettings, isLoading, hasErrored };
};
