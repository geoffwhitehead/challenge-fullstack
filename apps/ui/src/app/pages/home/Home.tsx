import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC<{}> = () => {
  return (
    <div>
      <p>Welcome to the home page</p>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};
