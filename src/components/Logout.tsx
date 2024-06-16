import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
  }
`;

const LogoutIcon = styled(FiLogOut)`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #10131D
  }
`;

const LogoutComponent = () => {
const { logout } = useAuth();
const navigate = useNavigate();
  const handleLogout = async () => {
    await logout()
    navigate('/login')
  };

  return (
    <LogoutButton onClick={handleLogout}>
      <LogoutIcon />
    </LogoutButton>
  );
};

export default LogoutComponent;
