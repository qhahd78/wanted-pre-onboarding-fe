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

  const inputhandler = (e, feed) => {
    console.log(inputValue);
    if (!(e.target.id != feed.id)) {
      setinputValue({
        ...inputValue,
        id: e.target.id,
        nickname: 'Umin',
        comment: e.target.value,
      });
    }
  };

  const onClickFuc = (e, feed) => {
    if (!(e.target.id != feed.id)) {
      if (inputValue.comment.length > 0) {
        const newComments = Comments.concat(inputValue);
        setComments(newComments);
        setinputValue({ nickname: 'Umin', comment: '' });
      }
    }
    console.log(Comments);
  };

  const enterFunc = (e, feed) => {
    if (
      e.target.id === feed.id &&
      e.key === 'Enter' &&
      inputValue.comment.length > 0
    ) {
      const newComments = Comments.concat(inputValue);
      setComments(newComments);
    }
    setinputValue({ nickname: 'Umin', comment: '' });
    // console.log(feed);
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
        {/* {Feeds.map((feed) => {
          feed.id != FeedId ? (
            <Feed
              key={feed.id}
              feed={feed}
              inputhandler={inputhandler}
              inputValue={inputValue}
              onClickFunc={onClickFuc}
              enterFunc={enterFunc}
              newComments={Comments}
            />
          ) : (
            <Feed
              key={feed.id}
              feed={feed}
              inputhandler={inputhandler}
              inputValue={inputValue}
              onClickFunc={onClickFuc}
              enterFunc={enterFunc}
            />
          );
        })} */}
        {Feeds.map((feed) => (
          <Feed
            key={feed.id}
            feed={feed}
            inputhandler={inputhandler}
            inputValue={inputValue}
            onClickFunc={onClickFuc}
            enterFunc={enterFunc}
            newComments={Comments}
            // input={Input}
            // setInput={setInput}
          />
        ))}
      </MainContainer>
    </MainLayout>
  );
};

export default Main;
