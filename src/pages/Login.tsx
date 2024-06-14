import React from 'react';
import styled from 'styled-components';
import InputCustom from '../components/InputCustom';
import Button from '../components/ButtonCustom';
import Background from '../components/Background';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginBox = styled.div`
  width: 25%;
  height: 70%;
  background-color: #10131D;
  padding: 40px;
  border-radius: 1.4rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between

`;

const LoginHeader = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* Corrigido para 'text-align' em vez de 'text-aling' */
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
`;

const SignupText = styled.p`
  color: #bebec0;
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;

  a {
    color: #ffc046;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
  width: 1rem;
  height: 1rem;
`;

const CheckboxText = styled.span`
  font-size: 1em;
  text-align: center;
  color: white;
  width: 100%
`;

const Logo = styled.img`
  width: 4rem;
  height: auto;
  margin-bottom: 20px;
  align-self: left;  
`;

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Background image="src/assets/background/background.png">
      <LoginContainer>
        <LoginBox>
            <LoginHeader>
            <Logo src="src/assets/logo/logo.png" alt="Logo Cidade Alta" />
            <Logo src="src/assets/logo/logo.png" alt="Logo Cidade Alta" />
            </LoginHeader>
          <Title>Login</Title>
          <LoginForm onSubmit={handleSubmit}>
            <InputCustom placeholder="Email" colorSecundariaFocus="#BEBCBC" />
            <InputCustom placeholder="Senha" showPasswordIcon={true} colorSecundariaFocus="#BEBCBC" />
            <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxText>Lembrar-me</CheckboxText>
          </CheckboxContainer>
            <LoginButton backgroundColor="#FFC046" text="Acessar" height="2.5rem" />
          </LoginForm>
          <SignupText>
            Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
          </SignupText>
        </LoginBox>
      </LoginContainer>
    </Background>
  );
};

export default Login;
