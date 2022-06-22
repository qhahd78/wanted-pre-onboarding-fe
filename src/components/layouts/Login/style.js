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
  width: 450px;
  text-align: center;
  background-color: ${COLOR.WHITE};
  border: 1px solid ${COLOR.GRAY_1};
  padding: 20px 50px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 175px;
  height: 50px;
  margin: 30px 0;
`;

const LoginContent = styled.div`
  & > p + p {
    margin-bottom: 10px;
  }
`;

const LineBox = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-weight: 700;
    padding: 0 20px;
  }
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid ${COLOR.GRAY_1};
  height: 0;
`;

const LoginContainer2 = styled(LoginContainer)`
  height: auto;
`;

export {
  LoginLayout,
  LoginContainer,
  LoginContainer2,
  Logo,
  LoginContent,
  LineBox,
  Line,
};
