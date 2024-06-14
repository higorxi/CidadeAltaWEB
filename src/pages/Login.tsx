import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import GlassmorphicContainer from '../components/GlassmorphicContainer';
import InputCustom from '../components/InputCustom';
import Button from '../components/ButtonCustom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Background image="src/assets/background/background.png">
      <GlassmorphicContainer>
      <InputCustom placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} showPasswordIcon={true}/>
        <Button backgroundColor='#FFC046' width='100%' height='2rem' text='Acessar' ativo={true} onClick={handleSubmit}/>
        </GlassmorphicContainer>
      </Background>
    </form>
  );
};

export default Login;
