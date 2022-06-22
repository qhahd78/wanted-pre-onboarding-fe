import React from 'react';
import { StyledInput } from './style';

const Input = ({ placeholder, type = 'email' }) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};

export default Input;
