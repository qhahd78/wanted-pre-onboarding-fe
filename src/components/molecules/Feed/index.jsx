/* eslint-disable react/jsx-key */
import {
  BookmarkSimple,
  ChatCircleDots,
  DotsThree,
  HeartStraight,
  Key,
  PaperPlaneTilt,
  Smiley,
  Spinner,
} from 'phosphor-react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Comment,
  CommentContainer,
  CommentInput,
  CommentInputConatiner,
  FeedContainer,
  FeedHeader,
  IconContainer,
  ImgContainer,
  LikeCount,
  Profile,
  ProfileContainer,
  WriterName,
} from './style';

const Feed = ({
  feed,
  inputhandler,
  inputValue,
  onClickFunc,
  enterFunc,
  newComments,
}) => {
  const [isLoading, setisLoading] = useState(true);

  const onLoadFunc = () => {
    setisLoading(false);
  };

  return (
    <FeedContainer id={feed.id}>
      <FeedHeader>
        <ProfileContainer>
          <Profile />
          <p>{feed.nickname}</p>
        </ProfileContainer>
        <DotsThree size={32} />
      </FeedHeader>
      <ImgContainer>
        {isLoading ? <Spinner size={32} /> : <></>}
        <img alt="img load error" src={feed.img} onLoad={onLoadFunc} />
      </ImgContainer>
      <IconContainer>
        <div>
          <HeartStraight size={24} />
          <ChatCircleDots size={24} />
          <PaperPlaneTilt size={24} />
        </div>
        <div>
          <BookmarkSimple size={24} />
        </div>
      </IconContainer>
      <LikeCount>좋아요 {feed.likeNum}개</LikeCount>
      <CommentContainer>
        {feed.comments.map((comment) => (
          <Comment key={comment.id}>
            <WriterName>{comment.nickname}</WriterName>
            <p>{comment.comment}</p>
          </Comment>
        ))}
        {newComments.length > 0 ? (
          newComments.map((newComment) => (
            <Comment>
              <WriterName>{newComment.nickname}</WriterName>
              <p>{newComment.content}</p>
            </Comment>
          ))
        ) : (
          <></>
        )}
      </CommentContainer>
      <CommentInputConatiner>
        <CommentInput>
          <Smiley size={32} />
          <input
            id={feed.id}
            name={feed.nickname}
            type="text"
            placeholder="댓글달기..."
            onChange={inputhandler}
            value={inputValue.content}
            onKeyPress={enterFunc}
          />
        </CommentInput>
        <button
          id={feed.id}
          onClick={(e) => {
            onClickFunc(e, feed);
          }}
        >
          게시
        </button>
      </CommentInputConatiner>
    </FeedContainer>
  );
};

export default Feed;
