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
import React from 'react';
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
  key,
  nickname,
  likeNum,
  img,
  comments,
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
    <FeedContainer>
      <FeedHeader>
        <ProfileContainer>
          <Profile />
          <p>{nickname}</p>
        </ProfileContainer>
        <DotsThree size={32} />
      </FeedHeader>
      <ImgContainer>
        {isLoading ? <Spinner size={32} /> : <></>}
        <img alt="img load error" src={img} onLoad={onLoadFunc} />
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
      <LikeCount>좋아요 {likeNum}개</LikeCount>
      <CommentContainer>
        {comments.map((comment) => (
          <Comment>
            <WriterName>{comment.nickname}</WriterName>
            <p>{comment.comment}</p>
          </Comment>
        ))}
        {newComments.length > 0 ? (
          newComments.map((newComment) => (
            <Comment>
              <WriterName>Umin</WriterName>
              <p>{newComment.Umin}</p>
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
            name={nickname}
            type="text"
            placeholder="댓글달기..."
            onChange={inputhandler}
            onKeyPress={enterFunc}
          />
        </CommentInput>
        <button name={nickname} onClick={onClickFunc}>
          게시
        </button>
      </CommentInputConatiner>
    </FeedContainer>
  );
};

export default Feed;
