import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { HomePage } from './pages/home/Home';
import { RegisterPage } from './pages/Register/Register';
import { UsersPage } from './pages/Users/Users';

export const App: React.FC<{}> = () => {
  return (
    <Router>
      <Nav
        routes={[
          { name: 'Home', path: '/' },
          { name: 'Users', path: '/users' },
        ]}
      />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
};
