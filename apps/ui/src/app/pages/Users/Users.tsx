import { useSettings } from 'apps/ui/src/hooks/useSettings';
import { useUsers } from 'apps/ui/src/hooks/useUsers';
import React from 'react';
import { UserList } from './UserList/UserList';

export const UsersPage: React.FC<{}> = () => {
  const [users, isLoading, hasErrored] = useUsers();
  const [settings, settingsIsLoading, settingsHasErrored] = useSettings();

  if (hasErrored || settingsHasErrored) {
    return <p>Something has gone wrong... </p>;
  }

  if (isLoading || settingsIsLoading) {
    <p>Loading...</p>;
  }

  return (
    <div>
      <button></button>
      {settings?.users?.isActive && <UserList users={users} />}
    </div>
  );
};
