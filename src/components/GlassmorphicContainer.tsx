import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface GlassmorphicContainerProps {
  children?: ReactNode;
  background?: string;
  borderRadius?: string;
  boxShadow?: string;
  backdropFilter?: string;
  webkitBackdropFilter?: string;
  padding?: string;
  margin?: string;
  height?: string;
  width?: string;
}

const GlassmorphicDiv = styled.div<GlassmorphicContainerProps>`
  background: ${props => props.background || 'rgba(255, 255, 255, 0.1)'};
  border-radius: ${props => props.borderRadius || '16px'};
  box-shadow: ${props => props.boxShadow || '0 4px 30px rgba(0, 0, 0, 0.1)'};
  backdrop-filter: ${props => props.backdropFilter || 'blur(0.6rem)'};
  -webkit-backdrop-filter: ${props => props.webkitBackdropFilter || 'blur(4rem)'};
  padding: ${props => props.padding || '2rem 2rem 0rem 2rem'};
  margin: ${props => props.margin || '3rem 3rem 0rem 3rem'};
  height: ${props => props.height || '75vh'};
  width: ${props => props.width || null};
`;

const GlassmorphicContainer: FC<GlassmorphicContainerProps> = ({
  children,
  background,
  borderRadius,
  boxShadow,
  backdropFilter,
  webkitBackdropFilter,
  padding,
  margin,
  height,
  width
}) => {
  return (
    <GlassmorphicDiv
      background={background}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      backdropFilter={backdropFilter}
      webkitBackdropFilter={webkitBackdropFilter}
      padding={padding}
      margin={margin}
      height={height}
      width={width}
    >
      {children}
    </GlassmorphicDiv>
  );
};

export default GlassmorphicContainer;
