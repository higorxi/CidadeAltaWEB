import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #10131D;
  color: #FFC046;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('src/assets/background/defaultGraffiti.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.3; 
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 10rem;
  margin: 0;
  font-family: 'Permanent Marker', cursive;
  text-shadow: 2px 2px #000;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
  font-family: 'Permanent Marker', cursive;
  text-shadow: 1px 1px #000;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin: 10px 0;
  max-width: 600px;
  font-family: 'Arial', sans-serif;
`;

const Button = styled.button`
  background-color: #FFC046;
  color: #10131D;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d4a038;
  }
`;

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <Title>404</Title>
        <Subtitle>Página Não Encontrada</Subtitle>
        <Description>
          Desculpe, a página que você está procurando não existe. Talvez você tenha digitado o endereço incorretamente ou a página tenha sido movida.
        </Description>
        <Button onClick={goHome}>Voltar para Home</Button>
      </Content>
    </Container>
  );
};

export default NotFoundPage;
