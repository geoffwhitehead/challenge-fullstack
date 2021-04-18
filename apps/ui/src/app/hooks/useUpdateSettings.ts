import { Settings } from '@org/types';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import { getItem } from '../../helpers/localStorage';
import { useSettings } from '../contexts/SettingsContext';
import { useFetch } from './useFetch';

export const useUpdateSettings = () => {
  const { setSettings } = useSettings();
  const history = useHistory();
  const { fetch, isLoading, hasErrored } = useFetch<Settings>();

  const updateSettings = useCallback(
    async (data: Settings) => {
      const { body, statusCode } = await fetch({
        url: `${config.apiUrl}/settings`,
        opts: {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getItem('access_token'),
          },
        },
      });

      if (statusCode === 401) {
        // token expired - redirect to login - refresh / sessions token not implemented
        return history.push('/login');
      }

      if (body) setSettings(body);
    },
    [fetch, history, setSettings]
  );

  return { updateSettings, isLoading, hasErrored };
};
