import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRouter = () => {
  const getUserId = localStorage.getItem('id');
  const getUserPw = localStorage.getItem('pw');
  const [isLogin, setisLogin] = useState(false);
  // 유저 정보 (id, pw) 가 둘 다 존재할 경우 true 를 리턴
  if (!(getUserId && getUserPw)) {
    console.log('실행');
    setisLogin(true);
    return isLogin ? <Navigate to="/main" /> : <Outlet />;
  }
};

export default AuthRouter;
