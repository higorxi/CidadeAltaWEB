import React from 'react';
import styled from 'styled-components';
import InputCustom from '../../components/InputCustom';
import Button from '../../components/ButtonCustom';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlassmorphicContainer from '../../components/GlassmorphicContainer';
import ProfilePicture from '../../components/ProfilePicture';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 80%; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileBox = styled(GlassmorphicContainer)`
  width: 100%;
  padding: 3rem;
  border-radius: 1.4rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem; 
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem; 
`;

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

const Profile: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Background image="src/assets/background/background.png">
      <Header />  
      <ProfileContainer>
        <ProfileWrapper>
          <ProfileBox height='100%' padding='2rem 2rem 2rem 2rem'>
            <Title>Perfil</Title>
            <ProfileForm onSubmit={handleSubmit} >
              <ProfilePicture imageUrl="src/assets/background/profilePicture.jpg" onClick={() => console.log('Alterar foto clicado')} />
              <InputCustom placeholder="Nome" colorSecundariaFocus="#BEBCBC" />
              <InputCustom placeholder="Email" colorSecundariaFocus="#BEBCBC" />
              <InputCustom placeholder="Senha Atual" showPasswordIcon={true} colorSecundariaFocus="#BEBCBC" />
              <InputCustom placeholder="Nova Senha" showPasswordIcon={true} colorSecundariaFocus="#BEBCBC" />
              <ProfileButton backgroundColor="#FFC046" text="Alterar" height="2.5rem" />
            </ProfileForm>
          </ProfileBox>
        </ProfileWrapper>
      </ProfileContainer>
      <Footer />
    </Background>
  );
};

export default Profile;
