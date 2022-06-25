import React from 'react';
import Feed from '../../molecules/Feed';
import GNB from '../../molecules/GNB';
import { MainContainer, MainLayout } from './style';

const Main = () => {
  return (
    <MainLayout>
      <GNB />
      <MainContainer>
        <Feed />
        <Feed />
      </MainContainer>
    </MainLayout>
  );
};

export default Main;
