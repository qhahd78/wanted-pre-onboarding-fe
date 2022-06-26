import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const Router = ({ isLogin }) => {
  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path="/" element={<MainPage />} />
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
