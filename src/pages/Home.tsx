import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlassmorphicContainer from '../components/GlassmorphicContainer';
import Background from '../components/Background';

const Home: React.FC = () => {

  return (
    <>
     <Background image="src/assets/background/background.png">
    <Header/>
    <GlassmorphicContainer margin='1rem 3rem 0rem 3rem'>
    </GlassmorphicContainer>
    <Footer/>
    </Background>
    </>
  );
};

export default Home;
