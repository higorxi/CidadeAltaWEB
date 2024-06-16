import styled from 'styled-components';
import React from 'react';

interface UnderlineTextProps {
  text: string;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ text }) => {
  const SpanWithUnderline = styled.span`
    position: relative;
    display: inline-block;
    font-size: 1rem;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    border-bottom: 0.1rem solid #6273AD; 
    transition: border-bottom-width 0.3s, font-size 0.3s;

    &:hover {
      border-bottom-width: 0.2rem; 
      font-size: 1.05rem; 
      opacity: 0.95;
    }
  `;

  return (
    <SpanWithUnderline>
      {text}
    </SpanWithUnderline>
  );
};
export default UnderlineText;