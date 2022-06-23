import React from 'react';
import Input from '../../atoms/Input';
import {
  Facebook,
  FacebookBox,
  FindPassword,
  Line,
  LineBox,
  LoginContainer,
  LoginContainer2,
  LoginContainer3,
  LoginContent,
  LoginLayout,
  Logo,
  StoreContainer,
  StoreImg,
} from './style';
import logo from '../../../assets/images/logo.png';
import facebook from '../../../assets/images/facebook.png';
import appstore from '../../../assets/images/appstore.png';
import googleplay from '../../../assets/images/googleplay.png';
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
          <FacebookBox>
            <Facebook src={facebook} />
            <p>Facebook으로 로그인</p>
          </FacebookBox>
          <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
        </LoginContent>
      </LoginContainer>
      <LoginContainer2>
        <p>
          <span>계정이 없으신가요?</span>
          <span> 가입하기</span>
        </p>
      </LoginContainer2>
      <LoginContainer3>
        <p>앱을 다운로드 하세요.</p>
        <StoreContainer>
          <StoreImg src={appstore} />
          <StoreImg src={googleplay} />
        </StoreContainer>
      </LoginContainer3>
    </LoginLayout>
  );
};

export default Login;
