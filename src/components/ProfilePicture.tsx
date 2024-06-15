import React from 'react';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

interface ProfilePictureProps {
  imageUrl: string;
  onClick?: () => void;
}

const CircleContainer = styled.div`
  position: relative;
  width: 100px; 
  height: 100px; 
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 2rem
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease-in-out;

  ${CircleContainer}:hover & {
    filter: blur(4px);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${CircleContainer}:hover & {
    opacity: 1;
  }
`;

const Icon = styled(FaCamera)`
  color: white;
  font-size: 2rem;
`;

const ProfilePicture: React.FC<ProfilePictureProps> = ({ imageUrl, onClick }) => {
  return (
    <CircleContainer onClick={onClick}>
      <ProfileImage src={imageUrl} alt="Profile" />
      <Overlay>
        <Icon />
      </Overlay>
    </CircleContainer>
  );
};

export default ProfilePicture;
