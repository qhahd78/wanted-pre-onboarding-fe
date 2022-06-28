import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Feed from '../../molecules/Feed';
import GNB from '../../molecules/GNB';
import { MainContainer, MainLayout } from './style';
import axios from 'axios';

const Main = () => {
  const [Feeds, setFeeds] = useState([]);
  const [inputValue, setinputValue] = useState({});
  const [Comments, setComments] = useState([]);

  const inputhandler = (e) => {
    setinputValue({
      nickname: 'Umin_5',
      content: e.target.value,
    });
  };

  const onClickFuc = (e) => {
    if (inputValue.content.length > 0) {
      setComments(Comments.concat(inputValue));
    }
    setinputValue({ nickname: 'Umin', content: '' });
  };

  const enterFunc = (e) => {
    if (e.key === 'Enter' && inputValue.content.length > 0) {
      setComments(Comments.concat(inputValue));
    }
    setinputValue({ nickname: 'Umin', content: '' });
  };

  const logoutFunc = (e) => {
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('pw');
  };

  const fetch = async () => {
    try {
      const feeds = await axios.get('/data/feeds.json');
      setFeeds(feeds.data.feeds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <MainLayout>
      <GNB logoutFunc={logoutFunc} />
      <MainContainer>
        {Feeds.map((feed) => (
          <Feed
            key={feed.id}
            feed={feed}
            inputhandler={inputhandler}
            inputValue={inputValue}
            onClickFunc={onClickFuc}
            enterFunc={enterFunc}
            newComments={Comments}
          />
        ))}
      </MainContainer>
    </MainLayout>
  );
};

export default Main;
