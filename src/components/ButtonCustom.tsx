import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  width?: string;
  height?: string;
  textColor?: string;
  text?: string;
  ativo?: boolean; 
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#007bff'};
  color: ${({ textColor }) => textColor || '#000000'};
  font-weight: bold;
  border: none;
  cursor: ${({ ativo }) => (ativo ? 'pointer' : 'not-allowed')}; 
  padding: 1.5rem;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease;
  font-family: 'Poppins', sans-serif;

  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? darken(0.1, backgroundColor) : darken(0.1, '#007bff')};
  }

  &:disabled {
    background-color: #000000 ; 
    opacity: 55%;
    color: #999; 
    cursor: not-allowed; 
  }
`;

const Button: FC<ButtonProps> = ({ backgroundColor, width, height, textColor, text, ativo = true, ...rest}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      textColor={textColor}
      disabled={!ativo} 
      ativo={ativo}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
