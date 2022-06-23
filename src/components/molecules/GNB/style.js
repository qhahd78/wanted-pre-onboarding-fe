import styled from 'styled-components';
import { COLOR } from '../../../styles/colors';

const GNBContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  z-index: 5;
  padding: 0 120px;
  position: sticky;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY_1};

  @media only screen and (max-width: 640px) {
    justify-content: space-between;
    padding: 0 20px;
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const LogoContainer = styled.div`
  width: 300px;
`;

const Logo = styled.img`
  width: 105px;
  height: 30px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 36px;
  border-radius: 8px;
  background-color: ${COLOR.GRAY_4};
  padding: 0 10px;
`;

const SearchInput = styled.input`
  font-size: 16px;
  background-color: inherit;
  color: ${COLOR.GRAY_3};
  padding-left: 10px;
  ::placeholder {
    font-weight: 300;
    color: ${COLOR.GRAY_3};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  min-width: 280px;
  svg {
    min-width: 32px;
    min-height: 32px;
  }

  svg,
  div {
    :hover {
      cursor: pointer;
    }
  }
`;

const LogoutBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background-color: ${COLOR.GRAY_4};
`;

export {
  GNBContainer,
  Logo,
  SearchBar,
  SearchInput,
  IconContainer,
  LogoutBox,
  LogoContainer,
};
