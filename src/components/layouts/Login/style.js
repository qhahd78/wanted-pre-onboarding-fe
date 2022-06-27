import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${COLOR.GRAY_0};
`;

const LoginContainer = styled.div`
  width: 390px;
  text-align: center;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY_1};
  padding: 20px 40px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 175px;
  height: 50px;
  margin: 30px 0;
`;

const LoginContent = styled.div`
  & > input:nth-child(1) {
    margin-bottom: 10px;
    border-color: ${(props) => (props.isIdValid ? '' : COLOR.RED)};
  }

  & > input:nth-child(2) {
    border-color: ${(props) => (props.isPwValid ? '' : COLOR.RED)};
  }

  & > input + input {
    margin-bottom: 20px;
    border-color: ${(props) => (props.isPwValid ? '' : COLOR.RED)};
  }
  & > button {
    background-color: ${(props) => (props.disabled ? '' : COLOR.BLUE_1)};
    :hover {
      cursor: pointer;
    }
  }
`;

const LineBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;

  & > p {
    font-weight: 700;
    padding: 0 20px;
    color: ${COLOR.GRAY_3};
  }
`;

const Line = styled.div`
  flex: 1;
  border: 0.5px solid ${COLOR.GRAY_1};
`;

const FacebookBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  font-size: 14px;
  & > p {
    font-weight: 700;
    color: ${COLOR.BLUE_3};
    :hover {
      cursor: pointer;
    }
  }
`;

const Facebook = styled.img`
  height: 25px;
  width: 25px;
`;

const FindPassword = styled.p`
  font-size: 12px;
  color: ${COLOR.BLUE_4};
  :hover {
    cursor: pointer;
  }
`;

const LoginContainer2 = styled(LoginContainer)`
  height: auto;
  font-size: 14px;
  margin-bottom: 0;

  p > span + span {
    font-weight: 700;
    color: ${COLOR.BLUE_1};
    :hover {
      cursor: pointer;
    }
  }
`;

const LoginContainer3 = styled(LoginContainer)`
  background-color: ${COLOR.GRAY_0};
  border: none;
  p {
    font-size: 14px;
    padding-bottom: 20px;
  }
`;

const StoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StoreImg = styled.img`
  width: 135px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;

export {
  LoginLayout,
  LoginContainer,
  LoginContainer2,
  Logo,
  LoginContent,
  LineBox,
  Line,
  FacebookBox,
  Facebook,
  FindPassword,
  LoginContainer3,
  StoreContainer,
  StoreImg,
};
