import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo/logo.png"

const FooterContainer = styled.footer`
  background-color: #10131D; 
  color: #FFFFFF; 
  display: flex; 
  margin-top: 2rem;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  bottom: 0;

 

  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    height: 2%; 

  }
`;

const LogoWrapper = styled.div`
  width: 3.5rem; 
  height: 3.5rem;
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-right: 20px; 
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 1rem; 
  
  @media (min-width: 768px) {
    margin-bottom: 0; 
  }
`;

const CenterText = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex: 1; 
    text-align: center; 
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconContainer>
        <LogoLink href="https://www.facebook.com">
          <FaFacebook size={20} color="#FFFFFF" />
        </LogoLink>
        <LogoLink href="https://www.instagram.com">
          <FaInstagram size={20} color="#FFFFFF" />
        </LogoLink>
        <LogoLink href="https://www.linkedin.com">
          <FaLinkedin size={20} color="#FFFFFF" />
        </LogoLink>
        <LogoLink href="https://www.google.com">
          <FaGoogle size={20} color="#FFFFFF" />
        </LogoLink>
        <LogoLink href="https://www.youtube.com">
          <FaYoutube size={20} color="#FFFFFF" />
        </LogoLink>
      </IconContainer>

      <CenterText>
        Copyright © 2020-2024, Cidade Alta, All rights reserved
      </CenterText>

      <LogoWrapper>
        <LogoLink href="https://cidadealtarp.com/">
          <img src={logo} alt="Logo Cidade Alta" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </LogoLink>
      </LogoWrapper>
    </FooterContainer>
  );
};

export default Footer;
