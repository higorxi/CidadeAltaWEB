import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import Signup from './pages/Signup';
import GlobalStyle from './GlobalStyles'; 
import Profile from './pages/Profile/Profile';
import Badge from './pages/Badge/Badge';
import NotFoundPage from './pages/404';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle /> 
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/perfil" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/emblemas" element={<PrivateRoute><Badge /></PrivateRoute>} />
          <Route path="/game" element={<PrivateRoute><Signup /></PrivateRoute>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
