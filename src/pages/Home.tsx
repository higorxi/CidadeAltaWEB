import React from 'react';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
