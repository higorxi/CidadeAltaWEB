import { FC, InputHTMLAttributes, useState, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  borderBottomColor?: string;
  colorSecundariaFocus?: string; 
  showPasswordIcon?: boolean;
}

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const StyledInput = styled.input<{ borderBottomColor?: string; colorSecundariaFocus?: string }>`
  width: 100%;
  padding: 10px 2.5rem 10px 10px;
  border: none;
  border-bottom: 0.1rem solid ${({ borderBottomColor }) => borderBottomColor || '#BEBCBC'};
  outline: none;
  font-size: 1rem;
  background: transparent;
  transition: all 0.3s;
  color: ${({ colorSecundariaFocus }) => colorSecundariaFocus || '#F3F3F3'};
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;

  &:focus {
    border-bottom-color: ${({ colorSecundariaFocus }) => colorSecundariaFocus || '#F3F3F3'};
  }
`;

const PlaceholderLabel = styled.label<{ active: boolean; colorSecundariaFocus?: string }>`
  position: absolute;
  left: 10px;
  top: ${({ active }) => (active ? '-1px' : '50%')};
  transform: translateY(-65%);
  width: calc(100% - 2.5rem);
  text-align: center;
  font-size: ${({ active }) => (active ? '0.85rem' : '1rem')};
  color: ${({ active, colorSecundariaFocus }) => (active ? colorSecundariaFocus || '#F3F3F3' : '#BEBCBC')};
  pointer-events: none;
  transition: all 0.3s;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const VisibilityToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const InputCustom: FC<CustomInputProps> = ({ placeholder, borderBottomColor = '#BEBCBC', colorSecundariaFocus = '#F3F3F3', showPasswordIcon = false, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(!showPasswordIcon);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        onFocus={handleFocus}
        onBlur={handleBlur}
        borderBottomColor={borderBottomColor}
        colorSecundariaFocus={colorSecundariaFocus}
        ref={inputRef}
        {...rest}
      />
      <PlaceholderLabel active={focused || !!rest.value || rest.defaultValue !== undefined} colorSecundariaFocus={colorSecundariaFocus}>
        {placeholder}
      </PlaceholderLabel>
      {showPasswordIcon && (
        <VisibilityToggle onClick={togglePasswordVisibility}>
          {showPassword ? <AiOutlineEyeInvisible size={20} color='#BEBCBC'/> : <AiOutlineEye size={20} color='#BEBCBC'/>}
        </VisibilityToggle>
      )}
    </InputContainer>
  );
};

export default InputCustom;
