import { Settings } from '@org/types';
import { createContext, ReactNode, useContext } from 'react';
import { useGetSettings } from '../../hooks/useGetSettings';
import { Error } from '../components/Error/Error';
import { Loading } from '../components/Loading/Loading';

export type SettingsContext = {
  settings: Settings;
  isLoading: boolean;
  hasErrored: boolean;
};

const Ctx = createContext<SettingsContext>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const { settings, isLoading, hasErrored } = useGetSettings();

  if (hasErrored) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Ctx.Provider value={{ settings, isLoading, hasErrored }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSettings() {
  const { settings, isLoading, hasErrored } = useContext(Ctx);

  return {
    settings,
    isLoading,
    hasErrored,
  };
}
