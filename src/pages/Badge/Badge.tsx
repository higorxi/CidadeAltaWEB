import styled from 'styled-components';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import GlassmorphicContainer from '../../components/GlassmorphicContainer';
import Button from '../../components/ButtonCustom';
import UnderlineText from '../../components/UnderlineText';
import LogoutComponent from '../../components/Logout';

const EmblemsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`;

const GlassWrapper = styled.div`
  display: flex;
  flex-direction: row; 
  width: 95%; 
  height: 100%; 
`;

const GlassContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem; 
  height: 100%;
`;

const MiddleGlassContainer = styled(GlassContainer)`
  flex: 2; 
  height: 100%
`;

const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const BadgeButton = styled(Button)`
  width: 100%;
`;

const Icon = styled.img`
  width: 4rem;
  height: auto;
  margin-bottom: 1rem;
`;

const BadgeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
`;

const EmblemsPage = () => {
  return (
    <Background image="src/assets/background/backgroundLogin.png">
      <Header />
      <LogoutComponent/>
      <EmblemsPageContainer>
        <GlassWrapper>
          <GlassContainer>
            <GlassmorphicContainer margin='1rem' width='90%' height=''>
            <BadgeForm>
            <UnderlineText text='Todos os Emblemas'/>
              </BadgeForm>
            </GlassmorphicContainer>
          </GlassContainer>
          <MiddleGlassContainer>
            <GlassmorphicContainer margin='1rem' width='70%' >
              <BadgeForm>
                <Title>EMBLEMAS</Title>
                <Icon src="src/assets/icons/questionIcon.png" alt="Icone de um ponto de interrogação" />
                <BadgeButton backgroundColor="#FFC046" text="Resgatar" height="2.5rem" />
              </BadgeForm>
            </GlassmorphicContainer>
          </MiddleGlassContainer>
          <GlassContainer>
            <GlassmorphicContainer margin='1rem' width='90%'>
            <BadgeForm>
              <UnderlineText text='Meus Emblemas'/>
              </BadgeForm>
            </GlassmorphicContainer>
          </GlassContainer>
        </GlassWrapper>
      </EmblemsPageContainer>
      <Footer />
    </Background>
  );
};

export default EmblemsPage;
