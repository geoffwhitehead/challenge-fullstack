import { Settings } from '@org/types';
import { createContext, ReactNode, useContext } from 'react';
import { useGetSettings } from '../../hooks/useGetSettings';
import { Error as ErrorComponent } from '../components/Error/Error';
import { Loading } from '../components/Loading/Loading';

export type SettingsContext = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  isLoading: boolean;
  hasErrored: boolean;
};

const Ctx = createContext<SettingsContext>(null);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const { settings, isLoading, hasErrored, setSettings } = useGetSettings();

  if (hasErrored) {
    return <ErrorComponent />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Ctx.Provider value={{ settings, setSettings, isLoading, hasErrored }}>
      {children}
    </Ctx.Provider>
  );
};

export const useSettings = () => {
  const ctx = useContext(Ctx);

  if (!ctx)
    throw new Error(
      `No Provider. Ensure that the SettingsProvider is rendered as a parent before using this hook.`
    );

  const { settings, setSettings, isLoading, hasErrored } = ctx;

  return {
    settings,
    isLoading,
    hasErrored,
    setSettings,
  };
};
