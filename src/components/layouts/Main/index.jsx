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
      ...inputValue,
      Umin: e.target.value,
    });
    console.log(inputValue);
  };

  const onClickFuc = (e) => {
    if (inputValue.Umin.length > 0) {
      setComments(Comments.concat(inputValue));
      console.log(Comments);
    }
  };

  const enterFunc = (e) => {
    if (e.key === 'Enter' && inputValue.Umin.length > 0) {
      setComments(inputValue);
    }
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
      <GNB />
      <MainContainer>
        {Feeds.map((feed) => (
          <Feed
            key={feed.key}
            nickname={feed.nickname}
            likeNum={feed.likeNum}
            img={feed.img}
            comments={feed.comments}
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
