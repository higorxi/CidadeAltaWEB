import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassmorphicContainer from '../components/GlassmorphicContainer';
import Background from '../components/Background';
import LogoutComponent from '../components/Logout';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const ContentWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home: React.FC = () => {
  return (
    <Background image="src/assets/background/backgroundLogin.png">
      <Header />
      <LogoutComponent/>
      <HomeContainer>
        <ContentWrapper>
          <GlassmorphicContainer height='75vh' width='100%'> 
          </GlassmorphicContainer>
        </ContentWrapper>
      </HomeContainer>
      <Footer />
    </Background>
  );
};

export default Home;
