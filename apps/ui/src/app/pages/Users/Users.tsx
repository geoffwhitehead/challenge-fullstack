import { useUsers } from 'apps/ui/src/hooks/useUsers';
import React from 'react';
import { UserList } from './UserList/UserList';

export const UsersPage: React.FC<{}> = () => {
  const [users, isLoading, hasErrored] = useUsers();

  if (hasErrored) {
    return <p>Something has gone wrong... </p>;
  }

  return (
    <div>
      <button></button>
      {isLoading ? <p>Loading...</p> : <UserList users={users} />}
    </div>
  );
};
