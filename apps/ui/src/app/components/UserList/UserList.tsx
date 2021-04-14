import React from 'react';

type UserList = {
  users: any[]; // TODO - pull from lib
};

export const UserList: React.FC<UserList> = ({ users }) => {
  return (
    <div>
      {users.length === 0 && <p>No users found...</p>}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
