import React from 'react';
import styled from 'styled-components';

interface SideTextProps {
  content1: string;
  content2: string;
  href2: string; 
  style1?: React.CSSProperties;
  style2?: React.CSSProperties;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text1 = styled.p<{ style1?: React.CSSProperties }>`
  font-size: 1em;
  margin: 0;
  ${({ style1 }) => style1 && { ...style1 }};
`;

const Text2 = styled.a<{ style2?: React.CSSProperties }>`
  font-size: 1em;
  margin-left: 0.5rem;
  text-decoration: none;
  ${({ style2 }) => style2 && { ...style2 }};
`;

const SideText: React.FC<SideTextProps> = ({ content1, content2, href2, style1, style2 }) => {
  return (
    <Container>
      <Text1 style={style1}>{content1}</Text1>
      <Text2 href={href2} style={style2}>{content2}</Text2>
    </Container>
  );
};

export default SideText;
