import React from 'react';
import {
  GNBContainer,
  IconContainer,
  Logo,
  LogoContainer,
  LogoutBox,
  SearchBar,
  SearchInput,
} from './style';
import logo from '../../../assets/images/logo.png';
import {
  MagnifyingGlass,
  House,
  PaperPlaneTilt,
  PlusCircle,
  Compass,
  Heart,
} from 'phosphor-react';
import { COLOR } from '../../../styles/colors';

const GNB = () => {
  return (
    <GNBContainer>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <SearchBar>
        <MagnifyingGlass color={COLOR.GRAY_3} size={20} />
        <SearchInput placeholder="검색" />
      </SearchBar>
      <IconContainer>
        <House size={32} weight="fill" />
        <PaperPlaneTilt size={32} />
        <PlusCircle size={32} />
        <Compass size={32} />
        <Heart size={32} />
        <LogoutBox>
          <p>Logout</p>
        </LogoutBox>
      </IconContainer>
    </GNBContainer>
  );
};

export default GNB;
