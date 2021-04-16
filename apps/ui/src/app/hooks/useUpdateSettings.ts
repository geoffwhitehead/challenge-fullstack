import { Settings } from '@org/types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { config } from '../../config';
import { getItem } from '../../helpers/localStorage';
import { useSettings } from '../contexts/SettingsContext';

export const useUpdateSettings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);
  const { setSettings } = useSettings();
  const history = useHistory();

  const updateSettings = async (data: Settings) => {
    setIsLoading(true);
    setHasErrored(false);

    const response = await fetch(`${config.apiUrl}/settings`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getItem('access_token'),
      },
    });

    if (response.status === 401) {
      // token expired - redirect to login - refresh / sessions token not implemented
      history.push('/login');
    }

    if (!response.ok) {
      setHasErrored(true);
    } else {
      const updatedSettings = await response.json();
      // update local cache of settings with settings returned from api
      setSettings(updatedSettings);
    }

    setIsLoading(false);
  };

  return { updateSettings, isLoading, hasErrored };
};