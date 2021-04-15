import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { AuthenticatedUserProvider } from './contexts/AuthenticatedContext';
import { SettingsProvider } from './contexts/SettingsContext';
import { HomePage } from './pages/Home/Home';
import { LoginPage } from './pages/Login/Login';
import { CreateUserPage } from './pages/Users/CreateUser/CreateUser';
import { UsersPage } from './pages/Users/Users';

export const App: React.FC<{}> = () => {
  return (
    <AuthenticatedUserProvider>
      <SettingsProvider>
        <Router>
          <Nav
            routes={[
              { name: 'Home', path: '/' },
              { name: 'Users', path: '/users' },
            ]}
          />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/users/create" component={CreateUserPage} />
            <Route path="/users" component={UsersPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </SettingsProvider>
    </AuthenticatedUserProvider>
  );
};
