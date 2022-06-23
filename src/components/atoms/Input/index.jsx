import React from 'react';
import { StyledInput } from './style';

const Input = ({ inputName, placeholder, type = 'email', onChangeFunc }) => {
  return (
    <StyledInput
      name={inputName}
      type={type}
      placeholder={placeholder}
      onChange={onChangeFunc}
    />
  );
};

export default Input;
