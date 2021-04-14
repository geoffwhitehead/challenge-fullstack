import { useUsers } from '../hooks/useUsers';
import { UserList } from './components/UserList/UserList';

export const App = () => {
  const [users, isLoading, hasErrored] = useUsers();

  if (hasErrored) {
    return <p>Something has gone wrong... </p>;
  }
  return (
    <div>{isLoading ? <p>Loading...</p> : <UserList users={users} />}</div>
  );
};

export default App;
