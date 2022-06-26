import React, { useEffect, useState } from 'react';
import Router from './routes/Router';

const App = () => {
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const getUserId = localStorage.getItem('id');
      const getUserPw = localStorage.getItem('pw');
      if (getUserId && getUserPw) {
        setisLogin(true);
      } else {
        setisLogin(false);
      }
    }, 2000);
  });
  return <Router isLogin={isLogin} />;
};

export default App;
