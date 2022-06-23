import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, onClickFunc }) => {
  return <StyledButton onClick={onClickFunc}>{children}</StyledButton>;
};

export default Button;
