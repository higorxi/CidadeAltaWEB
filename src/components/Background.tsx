// Background.js
import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface BackgroundProps {
  image: string;
  children?: ReactNode;
}

const BackgroundContainer = styled.div<{ image: string }>`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  z-index: 0; 
`;

const Background: FC<BackgroundProps> = ({ image, children }) => {
  return <BackgroundContainer image={image}>{children}</BackgroundContainer>;
};

export default Background;
