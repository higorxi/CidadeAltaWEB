import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface BackgroundProps {
  image: string;
  children?: ReactNode;
}

const BackgroundContainer = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  z-index: -1; 
`;

const Background: FC<BackgroundProps> = ({ image, children }) => {
  return <BackgroundContainer image={image}>{children}</BackgroundContainer>;
};

export default Background;
