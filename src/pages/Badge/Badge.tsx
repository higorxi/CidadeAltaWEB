import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import GlassmorphicContainer from '../../components/GlassmorphicContainer';
import Button from '../../components/ButtonCustom';
import UnderlineText from '../../components/UnderlineText';
import LogoutComponent from '../../components/Logout';
import BadgesService from '../../service/Badges/BadgesService';
import InputCustom from '../../components/InputCustom';
import backgroundImage from "../../assets/background/backgroundLogin.png";
import questIcon from "../../assets/icons/questionIcon.png"
interface Badge {
  id: number;
  name: string;
  image: string;
  slug: string;
  type: string;
}

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
  justify-content: flex-start;
  margin: 0 0.5rem;
  height: 100%;
`;

const MiddleGlassContainer = styled(GlassContainer)`
  flex: 2;
  justify-content: center;
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
  margin-bottom: 0.5rem;
  max-height: 4.5rem;
  min-height: 4.5rem;
  height: 100%
`;

const Icon2 = styled.img`
  width: 10rem;
  height: auto;
  margin-bottom: 0.5rem;
`;

const BadgeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 90%;
  max-height: 44rem; 
  overflow-y: auto; 
`;

const BadgeForm1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  max-height: 44rem; 
  overflow-y: auto;
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;

const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const BadgeName = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
  color: white;
`;

const BadgeType = styled.span<{ type: string }>`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
  color: white;
  ${(props) => {
    switch (props.type) {
      case 'ouro':
        return `background-color: #FFD700;`;
      case 'prata':
        return `background-color: #C0C0C0;`;
      case 'bronze':
        return `background-color: #CD7F32;`;
      default:
        return `background-color: #808080;`;
    }
  }}
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 1rem;
`;

const EmblemsPage = () => {
  const [userId, setUserId] = useState('');
  const [badges, setBadges] = useState([]);
  const [userBadges, setUserBadges] = useState<Badge[]>([]);
  const [filteredBadges, setFilteredBadges] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [iconUrl, setIconUrl] = useState('')

  useEffect(() => {
    async function fetchBadges() {
      try {
        const response = await BadgesService.getAllBadges();
        setBadges(response);
        setFilteredBadges(response);
      } catch (error) {
        console.error('Erro ao buscar os emblemas:', error);
      }
    }

    fetchBadges();
  }, []);

  useEffect(() => {
    const filtered = badges.filter(
      (badge: any) =>
        badge.name.toLowerCase().includes(searchName.toLowerCase()) &&
        badge.type.toLowerCase().includes(searchType.toLowerCase())
    );
    setFilteredBadges(filtered);
  }, [searchName, searchType, badges]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);

      setUserId(parsedUser.id)
      if (parsedUser.badges) {
        
        setUserBadges(parsedUser.badges);
      }
    }
  }, []);

  const handleRedeemBadge = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      const response = await BadgesService.addRandomBadges(userId);
      setIconUrl(response.badge.image);
      setUserBadges((prevBadges) => [...prevBadges, response.badge]);
  
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        const updatedUser = {
          ...user,
          badges: [...user.badges, response.badge],
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('Usuário não encontrado no localStorage.');
      }
    } catch (error) {
      console.error('Erro ao resgatar o emblema:', error);
    }
  };

  return (
    <Background image={backgroundImage}>
      <Header />
      <LogoutComponent />
      <EmblemsPageContainer>
        <GlassWrapper>
          <GlassContainer>
            <GlassmorphicContainer margin='1rem' width='90%'>
              <BadgeForm>
                <UnderlineText text='Todos os Emblemas' />
                <SearchContainer>
                  <InputCustom
                    type='text'
                    placeholder='Nome'
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <InputCustom
                    type='text'
                    placeholder='Tipo'
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                  />
                </SearchContainer>
                <BadgeGrid>
                  {filteredBadges.map((badge: any) => (
                    <BadgeItem key={badge.id}>
                      <Icon src={badge.image} alt={badge.name} />
                      <BadgeName>{badge.name}</BadgeName>
                      <BadgeType type={badge.type}>{badge.type}</BadgeType>
                    </BadgeItem>
                  ))}
                </BadgeGrid>
              </BadgeForm>
            </GlassmorphicContainer>
          </GlassContainer>
          <MiddleGlassContainer>
            <GlassmorphicContainer margin='1rem' width='70%'>
              <BadgeForm1>
                <Title>EMBLEMAS</Title>
                <Icon2 src={iconUrl ? iconUrl : questIcon} alt="Icone de um ponto de interrogação" />
                <BadgeButton 
                  backgroundColor="#FFC046" 
                  text="Resgatar" 
                  height="2.5rem" 
                  onClick={handleRedeemBadge} 
                />
              </BadgeForm1>
            </GlassmorphicContainer>
          </MiddleGlassContainer>
          <GlassContainer>
            <GlassmorphicContainer margin='1rem' width='90%'>
              <BadgeForm>
                <UnderlineText text='Meus Emblemas' />
                <BadgeGrid>
                  {userBadges.map((badge) => (
                    <BadgeItem key={badge.id}>
                      <Icon src={badge.image} alt={badge.name} />
                      <BadgeName>{badge.name}</BadgeName>
                      <BadgeType type={badge.type}>{badge.type}</BadgeType>
                    </BadgeItem>
                  ))}
                </BadgeGrid>
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
