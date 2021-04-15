import { useUpdateSettings } from 'apps/ui/src/hooks/useUpdateSettings';
import { useUsers } from 'apps/ui/src/hooks/useUsers';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Error } from '../../components/Error/Error';
import { Loading } from '../../components/Loading/Loading';
import { useAuthenticatedUser } from '../../contexts/AuthenticatedContext';
import { useSettings } from '../../contexts/SettingsContext';
import { UserList } from './UserList/UserList';

export const UsersPage: React.FC<{}> = () => {
  const { users, isLoading, hasErrored } = useUsers();
  const { isAuthenticated } = useAuthenticatedUser();
  const { settings } = useSettings();
  const { updateSettings, ...updateSettingsHook } = useUpdateSettings();

  if (hasErrored || updateSettingsHook.hasErrored) {
    return <Error />;
  }

  if (isLoading || updateSettingsHook.isLoading) {
    return <Loading />;
  }

  const isUsersGridEnabled = settings?.users?.isActive;

  const handleUserGridToggle = () =>
    updateSettings({
      ...settings,
      users: { ...settings.users, isActive: !settings.users.isActive },
    });

  return (
    <div>
      <Controls>
        <Link to="/users/create">
          <button>Create user</button>
        </Link>
        <button disabled={!isAuthenticated} onClick={handleUserGridToggle}>
          {`${isUsersGridEnabled ? 'Disable' : 'Enable'} users grid`}
        </button>
      </Controls>

      {isUsersGridEnabled ? (
        <UserList users={users} />
      ) : (
        <p>Users grid is disabled</p>
      )}
    </div>
  );
};

const Controls = styled.div`
  padding: 1rem 0rem;
`;
