import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, onClickFunc, disabled }) => {
  return (
    <StyledButton onClick={onClickFunc} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
