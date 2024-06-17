import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputCustom from '../../components/InputCustom';
import Button from '../../components/ButtonCustom';
import Background from '../../components/Background';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GlassmorphicContainer from '../../components/GlassmorphicContainer';
import ProfilePicture from '../../components/ProfilePicture';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { updateProfile } from '../../service/Profile/ProfileService';
import LogoutComponent from '../../components/Logout';
import backgroundImage from '../../assets/background/backgroundLogin.png';
import profilePicture from "../../assets/background/profilePicture.jpg"

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

const TogglePasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const TogglePasswordText = styled.span`
  color: #BEBCBC;
  margin-right: 8px;
`;

const PasswordFieldsContainer = styled.div<{ isVisible: boolean }>`
  margin-top: 1rem;
  overflow: hidden;
  transition: height 3s ease-in-out;
  height: ${props => (props.isVisible ? 'auto' : '0')};
`;

const Profile: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [nomeOriginal, setNomeOriginal] = useState('');
  const [emailOriginal, setEmailOriginal] = useState('');

  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserId(userData.id || '');
      setNome(userData.name || '');
      setNomeOriginal(userData.name || '');
      setEmail(userData.email || '');
      setEmailOriginal(userData.email || '');
      setImageURL(userData.profileImageUrl || '');
    }
  }, []);

  const togglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFields: Partial<ProfileData> = {};

    if (nome !== nomeOriginal) {
      updatedFields.name = nome;
    }

    if (email !== emailOriginal) {
      updatedFields.email = email;
    }

    if (senhaAtual && novaSenha) {
      updatedFields.currentPassword = senhaAtual;
      updatedFields.password = novaSenha;
    }

    try {
      const success = await updateProfile(updatedFields, userId);

      if (success) {
        console.log('Perfil atualizado com sucesso!');
        setNomeOriginal(nome);
        setEmailOriginal(email);
      } else {
        console.error('Falha ao atualizar perfil');
      }
    } catch (error) {
      console.error('Erro ao enviar dados do perfil:', error);
    }
  };

  return (
    <Background image={backgroundImage}>
      <Header />
      <LogoutComponent/>
      <ProfileContainer>
        <ProfileWrapper>
          <ProfileBox height='100%' padding='2rem 2rem 2rem 2rem'>
            <Title>Perfil</Title>
            <ProfileForm onSubmit={handleSubmit}>
              <ProfilePicture
                imageUrl={imageURL ? imageURL : profilePicture}
                onClick={() => console.log('Alterar foto clicado')}
              />
              <InputCustom
                placeholder="Nome"
                colorSecundariaFocus="#BEBCBC"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <InputCustom
                placeholder="Email"
                colorSecundariaFocus="#BEBCBC"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TogglePasswordContainer onClick={togglePasswordFields}>
                <TogglePasswordText>Alterar Senha</TogglePasswordText>
                {showPasswordFields ? (
                  <FiChevronUp size={20} color='#BEBCBC' />
                ) : (
                  <FiChevronDown size={20} color='#BEBCBC' />
                )}
              </TogglePasswordContainer>
              <PasswordFieldsContainer isVisible={showPasswordFields}>
                <InputCustom
                  placeholder="Senha Atual"
                  showPasswordIcon={true}
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  colorSecundariaFocus="#BEBCBC"
                />
                <InputCustom
                  placeholder="Nova Senha"
                  showPasswordIcon={true}
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  colorSecundariaFocus="#BEBCBC"
                />
              </PasswordFieldsContainer>

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
