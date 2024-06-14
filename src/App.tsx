// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';
import SignUp from './pages/Signup';
import GlobalStyle from './GlobalStyles'; 

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle /> 
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
