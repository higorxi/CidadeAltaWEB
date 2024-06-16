import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #10131D;
  color: #FFFFFF;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  border-radius: 10px;
  margin: auto;
  margin-top: 1.4rem;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  max-width: 25rem;
  margin-bottom: 0;  
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 0.85rem;
  margin: 0 1rem;
  cursor: pointer;
  color: #FFFFFF;
  opacity: 70%;
  text-decoration: none;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: -1rem;
    right: -1rem;
    height: 0.15rem;
    background-color: #6273AD;
    transition: background-color 0.3s, left 0.3s, right 0.3s;
  }

  &:hover {
    color: #FFFFFF;
    opacity: 100%;
  }

  &:hover::before {
    background-color: #FFFFFF;
    left: -1.2rem;
    right: -1.2rem;
  }
`;

const ProfileCircle = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #FFFFFF;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface HeaderProps {
  userProfileUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ userProfileUrl }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">HOME</NavLink>
        <ProfileCircle href="/perfil">
          <ProfileImage src={userProfileUrl || 'src/assets/background/profilePicture.jpg'} alt="Foto do Usuário" />
        </ProfileCircle>
        <NavLink to="/emblemas">EMBLEMAS</NavLink>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
