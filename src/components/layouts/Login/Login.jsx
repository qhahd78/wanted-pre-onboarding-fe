import React from 'react';
import Input from '../../atoms/Input';
import {
  Line,
  LineBox,
  LoginContainer,
  LoginContainer2,
  LoginContent,
  LoginLayout,
  Logo,
} from './style';
import logo from '../../../assets/images/logo.png';
import Button from '../../atoms/Button';

const Login = () => {
  return (
    <LoginLayout>
      <LoginContainer>
        <Logo src={logo} />
        <LoginContent>
          <Input placeholder={'전화번호, 사용자 이름 또는 이메일'} />
          <Input type="password" placeholder="비밀번호" />
          <Button />
          <LineBox>
            <Line />
            <p>또는</p>
            <Line />
          </LineBox>
          <p>페이스북으로 로그인</p>
          <p>비밀번호를 잊으셨나요?</p>
        </LoginContent>
      </LoginContainer>
      <LoginContainer2>
        <p>계정이 없으신가요 ? </p>
      </LoginContainer2>
    </LoginLayout>
  );
};

export default Login;
