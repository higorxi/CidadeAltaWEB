import React from 'react';
import styled from 'styled-components';
import InputCustom from '../components/InputCustom';
import Button from '../components/ButtonCustom';
import SideText from '../components/SideText';
import Background from '../components/Background';

const Container = styled.div`
  display: flex;
  height: 85vh;
  width: 80%;
  margin: 3rem auto;
  background-color: #10131d;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 90%;
  }
`;

const LeftSection = styled.div`
  width: 30%;
  background-color: #10131d;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 2rem 0;
  }
`;

const Logo = styled.img`
  width: 4rem;
  height: auto;
  margin-bottom: 20px;
  align-self: left;  
`;

const Phrase = styled.p`
  font-size: 4.5rem;
  text-align: center;
  top: 20%; 
  width: 100%;
  font-family: 'Graffiti', sans-serif;
  color: #FFC046;
  white-space: pre-line;
   z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const CenterImage = styled.img`
  position: absolute;
  left: 35%;
  bottom: 0;
  transform: translateX(-50%);
  width: 22%;
  height: auto;
  z-index: 0;

  @media (max-width: 768px) {
    position: static;
    width: 80%;
    max-width: 250px;
    margin: 2rem auto;
  }
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-top: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 65%;
  font-family: 'Poppins', sans-serif;
`;

const InputField = styled(InputCustom)`
  width: 100%;
  margin-bottom: 10px;
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
`;

const Signup: React.FC = () => {
  return (
    <>
    <Background image="src/assets/background/background.png">
    <Container>
      <LeftSection>
        <Logo src="src/assets/logo/logo.png" alt="Logo Cidade Alta" />
        <Phrase>O MAIOR SERVIDOR RP DA  AMERICA LATINA</Phrase>
      </LeftSection>
      <CenterImage src="src/assets/background/personagem.png" alt="Imagem Central" />
      <RightSection>
        <Title>Criar Conta</Title>
        <Form>
          <InputField placeholder="Nome" colorSecundariaFocus="#BEBCBC" />
          <InputField placeholder="Email" colorSecundariaFocus="#BEBCBC" />
          <InputField placeholder="Senha" showPasswordIcon={true} colorSecundariaFocus="#BEBCBC" />
          <InputField placeholder="Confirmar Senha" showPasswordIcon={true} colorSecundariaFocus="#BEBCBC" />
          <CheckboxContainer>
            <CheckboxInput type="checkbox" />
            <CheckboxText>Li e concordo com os Termos de Serviço e Política de Privacidade</CheckboxText>
          </CheckboxContainer>
          <Button backgroundColor="#FFC046" text="Criar Conta" ativo={true} height='2.2rem' width='100%' />
        </Form>
        <SideText
          content1="Já tem uma conta?"
          content2="Faça Login"
          href2="/login"
          style1={{ color: '#BEBCBC', fontFamily: 'Poppins, sans-serif' }} 
          style2={{ color: '#000000', fontWeight: 'bold', fontFamily: 'Poppins, sans-serif', marginLeft: '0.2rem' }} 
        />
      </RightSection>
    </Container>
    </Background>
    </>
  );
};

export default Signup;
